import {useState} from "react";
import permissions from '../../data/permissions.extended.json';

function PermissionViewer(props: { permission: string }) {
    const [showAdditional, setShowAdditional] = useState(false);
    const securityRiskColor = {
        1: 'text-green-500 border-green-500',
        2: 'text-green-900 border-green-900 ',
        3: 'text-yellow-500 border-yellow-500',
        4: 'text-red-400 border-red-400',
        5: 'text-red-800 border-red-800',
    }
    const permName = props.permission.split('.').pop() as string;
    const packageName = props.permission.split('.').slice(0, -1).join('.');
    // @ts-ignore
    const permInfo = permissions[permName];
    return (
        <div className={'border-b-2 p-2'}>
            <div className={'flex justify-between items-center gap-5 flex-wrap'}>
                <div className={'flex gap-3 items-center'}>
                    <span className="material-symbols-outlined text-android-green">
                {permInfo?.icon ? permInfo?.icon : 'question_mark'}
                </span>
                    <div className={'flex flex-col break-all'}>
                        <small className={'text-gray-500 break-all'}>{packageName}</small>
                        <h4 className={'font-semibold break-all'}>{permName}</h4>

                    </div>

                </div>

                {
                    permInfo && <button onClick={() => setShowAdditional(!showAdditional)}><i
                        className={`fi ${showAdditional ? 'fi-rr-angle-small-up' : 'fi-rr-angle-small-down'}`}></i></button>
                }


            </div>
            {
                permInfo && <div className={` overflow-hidden transition-all ${showAdditional ? 'h-full' : 'h-0'}`}>
                    <div className={'mt-5 mb-5'}>
                        <p>{permInfo.description}</p>
                        <div
                            className={`border-2 w-fit flex flex-col items-center gap-1 p-4 rounded-md  border-android-dark mt-3`}>
                            <h3>Security risk </h3>
                            <div
                                className={`border-2 rounded-full w-8 h-8 flex items-center justify-center text-xl ${(securityRiskColor as any)[permInfo.risk]}`}>
                                <p className={'font-sans font-semibold'}>{permInfo.risk}</p></div>
                        </div>

                    </div>

                </div>
            }
        </div>
    );

}

export default function ManifestShow(props: { manifest: xmlParsedManifest }) {
    const securityScore = props.manifest.manifest["uses-permission"]?.reduce((acc: number, permission: any) => {
            const permName = permission['_attributes']["android:name"].split('.').pop() as string;
            const packageName = permission['_attributes']["android:name"].split('.').slice(0, -1).join('.');
            // @ts-ignore
            const permInfo = permissions[permName];
            // check if is android permission
            if (packageName !== 'android.permission'){
                return acc;
            }
            if (permInfo) {
                return acc + permInfo.risk;
            }
            return acc;
        }
        , 0);


    return (
        <div className={'bg-white p-5 rounded-lg'}>
            <h1 className={'text-3xl text-center font-semibold'}>Apk raport</h1>
            <div className={' mt-5'}>
                <div className={'text-lg space-y-2 border-b-2 pb-4'}>
                    <h3>App label: <span
                        className={'font-semibold break-all'}>{props.manifest.manifest["application"]["_attributes"]["android:label"]}</span>
                    </h3>
                    <h3>App name: <span
                        className={'font-semibold break-all'}>{props.manifest.manifest["application"]["_attributes"]["android:name"]}</span>
                    </h3>
                    <h3>Package name: <span
                        className={'font-semibold break-all'}>{props.manifest.manifest["_attributes"]["package"]}</span></h3>
                </div>
                <div className={'flex gap-5 flex-wrap'}>

                    <div className={'mt-3 pt-2'}>
                        <h3 className={'text-2xl font-semibold mb-3'}>Permissions</h3>
                        {
                            props.manifest.manifest["uses-permission"]?.sort((a, b) => {
                                if (a["_attributes"]["android:name"] && b["_attributes"]["android:name"]) {
                                    return a["_attributes"]["android:name"].localeCompare(b["_attributes"]["android:name"])
                                }
                                return 0;
                            }).map((permission, index) => {
                                    if (!permission['_attributes']["android:name"]) {
                                        return null;
                                    }

                                    return (
                                        <PermissionViewer permission={permission['_attributes']["android:name"]}
                                                          key={`permision-${index}`}/>)
                                }
                            )
                        }
                    </div>
                    <div className={'border-2 h-fit mt-10 p-4 rounded-md flex items-center flex-col'}>
                        <h4 className={'font-semibold'}>Total security risk score:</h4>
                        <span className={'text-xl '}>{securityScore}</span>
                    </div>
                </div>

            </div>


        </div>
    );
}