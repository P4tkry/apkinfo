'use client'
import Form from "@/app/Form/Form";
import {useState} from "react";

import ManifestShow from "@/app/Form/ManifestShow";

export default function Index(props: { onSubmit: (values: any) => Promise<{ success: boolean, data?: xmlParsedManifest }> }) {
    const [manifest, setManifest] = useState<"loading"|null|xmlParsedManifest|"error">(null)
    async function onSubmit(values: any) {
        setManifest('loading')
        const submit = await props.onSubmit(values);
        if (submit.success && submit.data) {
            setManifest(submit.data)
        }else {
            setManifest('error')
            console.error(
                submit
            )
        }

    }


    return (<>
        {
            manifest === "loading" ? <div className={'animate-ping'}>
                Loading...
            </div> :manifest === "error"? <div>
                <h2 className={'text-2xl text-red-500'}>An error occurred</h2>
                <p>To get more information go to the logs</p>
            </div> : manifest ? (
                <ManifestShow manifest={manifest} />
            ) : <Form onSubmit={onSubmit} />
        }

    </>

    )
}