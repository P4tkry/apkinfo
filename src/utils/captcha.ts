'use server';
export default async function checkCaptcha(captcha: string) {



    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?${new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET as string,
        response: captcha
    })}`, {
        method: 'POST',

    })

    const data = await response.json();
    console.log(data)
    return data.success;
}