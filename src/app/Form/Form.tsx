'use client'
import {Formik, Form as FormikForm, ErrorMessage} from "formik";
import Dropzone, {useDropzone} from "react-dropzone";
import {GoogleReCaptcha} from "react-google-recaptcha-v3";
import * as Yup from 'yup';

export default function Form(props: { onSubmit: (values: any) => Promise<void> }) {
    const maxFileSize = parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE as string);
    return (
        <Formik initialValues={{
            captcha: '',
            file: null,
        }} validationSchema={Yup.object({
            captcha: Yup.string().required('Captcha is required'),
            file: Yup.mixed().test('fileType', 'Invalid file type', (value) => {
                if (!value) {
                    return true;
                }
                const {type} = value as any;
                return type === 'application/vnd.android.package-archive' || type === '' ;
            }).test('fileSize', 'File size is too large', (value) => {
                if (!value) {
                    return true;
                }
                return (value as File).size <= maxFileSize;
            })

        })} onSubmit={async (values, formikHelpers) => {
            formikHelpers.setSubmitting(true);

            const file: File = values.file as any;

            const decoder = new TextDecoder();

            const arrayBuffer = await file.arrayBuffer();
            console.log(arrayBuffer);

            const buffer = Buffer.from(arrayBuffer);


            await props.onSubmit({captcha: values.captcha, file: buffer.toString('base64')});
            formikHelpers.setSubmitting(false);


        }}>
            {(formik) => (

                <FormikForm className={'w-fit space-y-4'}>
                    <GoogleReCaptcha onVerify={async (secret) => {
                        await formik.setFieldValue('captcha', secret)
                    }}/>

                    <div>
                        {
                            formik.values.file && !formik.errors.file ? (
                                    <div
                                        className={'border-android-dark border-2 text-black p-3 rounded-lg flex flex-row items-center gap-4'}>
                                        <div><i className="fi fi-brands-android text-4xl text-android-green"></i></div>
                                        <p className={'font-semibold'}>{(formik.values.file as File).name}</p>
                                        <button onClick={async () => {
                                            await formik.setFieldValue('file', null)
                                        }}><i className="fi fi-rs-circle-xmark hover:text-gray-400 transition-all"></i>
                                        </button>
                                    </div>
                                ) :
                                <Dropzone accept={{
                                    'application/vnd.android.package-archive': ['.apk', '.xapk']
                                }} onDropAccepted={async (files) => {
                                    await formik.setFieldValue('file', files[0])
                                    await formik.validateField('file')
                                }}>
                                    {({getRootProps, getInputProps}) => (
                                        <div {...getRootProps()}
                                             className={`cursor-pointer border-2 px-5 py-8 rounded-xl transition-all border-dashed ${formik.touched.file && formik.errors.file ? 'border-red-500 text-red-500' : 'text-android-dark border-android-dark/50 hover:border-sky-600 hover:text-sky-600'}`}>
                                            <input {...getInputProps({
                                                name: 'file',
                                            })} />
                                            <p>Drag Your .apk file here, or click to select</p>
                                        </div>
                                    )}
                                </Dropzone>
                        }
                        <ErrorMessage name={'file'} component={'p'} className={'text-red-500 text-center mt-1'}/>
                    </div>


                    <div className={'text-center flex justify-center'}>
                        <button type={'submit'} className={'button bg-android-green flex gap-2'}>{
                            formik.isSubmitting ? <span className="material-symbols-outlined animate-spin">
progress_activity
</span> : <></>} Submit
                        </button>
                    </div>
                </FormikForm>


            )}
        </Formik>
    )
}