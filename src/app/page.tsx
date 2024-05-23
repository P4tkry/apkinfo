import Image from "next/image";
import Android from "../assets/img/android.png";
import Form from "@/app/Form";
import ApkFile from "@/class/ApkFile";
import * as Yup from "yup";
import checkCaptcha from "@/utils/captcha";
import {ValidationError} from "yup";


export default function Home() {
    async function submitBackendMechanism(data: { captcha: string, file: string }) {
        'use server';
        //save bloburl
        console.log('uploading file');
        console.log(data);
        try {
            const result = Yup.object({
                captcha: Yup.string().required('Captcha is required'),
                file: Yup.mixed()
            }).validateSync(data);
        } catch (err) {
            console.error(err);
            return {
                errors: (err as ValidationError).message,
                success: false
            }
        }

        const captcha = await checkCaptcha(data.captcha);
        if (!captcha) {
            return {
                errors: 'Invalid captcha',
                success: false

            }
        }

        console.log('saving file')


        const apkFile = new ApkFile(data.file);
        apkFile.save()
        console.log('decompiling file')
        await apkFile.decompile()
        console.log('reading manifest')
        const manifest = apkFile.readManifest();
        console.log('deleting file')
        apkFile.delete()
        console.log('done')
        return {data: manifest, success: true}
    }


    return (
        <div>
            <div className={'flex flex-col items-center gap-4'}>
                <h1 className={'text-6xl font-semibold text-center text-white'}>APK Info</h1>
                <p className={'text-2xl font-normal text-center text-white'}>A web app to inspect APK files</p>
            </div>
            <div className={'flex justify-center mt-5 bg-white rounded-lg p-5'}>
                <Form onSubmit={submitBackendMechanism}/>
            </div>

        </div>
    );
}
