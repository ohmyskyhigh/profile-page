import { FC } from 'react';
import Head from "next/head";

export const ProfileHeader: FC = () => {
    return (
        <Head>
            <title>Anthony Ingle</title>
            <meta name="description" content="Anthony Ingle's Profile" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7184A9" />
            <meta name="msapplication-TileColor" content="#7184A9" />
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:title" content="Anthony Ingle" />
            <meta property="og:type" content="profile" />
            <meta property="og:profile:first_name" content="Anthony" />
            <meta property="og:profile:last_name" content="Ingle" />
            <meta property="og:profile:gender" content="male" />
            <meta property="og:url" content="https://anthonyingle.me" />
            <meta
                property="og:description"
                content="Full-stack Software Engineer"
            />
            <meta property="og:image" content="/portrait.jpg" />
            <meta property="og:image:width" content="1024" />
            <meta property="og:image:height" content="1024" />
        </Head>

    )
}
