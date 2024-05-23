import {v4 as uuidv4} from 'uuid';
import fs from "fs";
import os from "os";
import {ChildProcessWithoutNullStreams, spawn} from 'child_process';
import convert from 'xml-js';

export default class ApkFile {
    uid: string = uuidv4();
    bufferArray: Buffer;
    private platform = os.platform()

    constructor(bufferString: string) {
        this.bufferArray = Buffer.from(bufferString, 'base64');
    }

    save() {
        fs.writeFileSync(`apks/${this.uid}.apk`, this.bufferArray);
    }

    delete() {
        fs.unlinkSync(`apks/${this.uid}.apk`);
        fs.rmSync(`decompiled/${this.uid}`, {recursive: true, force: true});
    }

    async decompile() {
        let command: ChildProcessWithoutNullStreams;
        const currentPath = process.cwd();
        if (this.platform === 'win32') {
            command = spawn('cmd.exe', ['/c', `${currentPath}/apktool/windows/apktool.bat`, 'd', `apks/${this.uid}.apk`, '-o', `decompiled/${this.uid}`, '-f', '-q']);
        }else {
            command = spawn(`${currentPath}/apktool/linux/apktool`, ['d', `apks/${this.uid}.apk`, '-o', `decompiled/${this.uid}`, '-f', '-q']);
        }

        command.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        command.stderr.on('data', (data) =>
            console.error(`stderr: ${data}`)
        );


        return new Promise<null>((resolve, reject) => {
            command.on('close', (code) => {
                if (code === 0) {
                    console.log('Decompiled')
                    resolve(null);
                } else {
                    reject();
                }
            });
        });
    }

    readManifest(): xmlParsedManifest {
        const manifest = fs.readFileSync(`decompiled/${this.uid}/AndroidManifest.xml`, 'utf-8');
        console.log(manifest);
        return JSON.parse(convert.xml2json(manifest, {compact: true, spaces: 4, nativeType: true}));
    }


}