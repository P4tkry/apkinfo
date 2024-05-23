'use client'
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

export default function Wrapper(props: {children: React.ReactNode}){
    return(
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}>
            {props.children}
        </GoogleReCaptchaProvider>
    )

}