import type {Metadata} from "next";
import "./globals.css";
import Wrapper from "@/app/Wrapper";
export const metadata: Metadata = {
    title: "ApkInfo | App to inspect APK files",
    description: "ApkInfo is a web app to inspect APK files. This is an open-source project.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`bg-android-dark font-raleway border-dashed`}>

        <div className={'mx-5 md:mx-20 mt-10 '}>
            <Wrapper>
                {children}
            </Wrapper>

        </div>
        </body>
        </html>
    );
}
