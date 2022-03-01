import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.less";
import { ProfileHeader } from "../components/Layout/ProfileHeader";
import Wave from "../components/Wave";
import { ImageLink } from "../components/ImageLink";
import { RowLink } from "../components/RowLink";

import GitHubSvg from "../svg/github.svg";
import LinkedInSvg from "../svg/linkedin.svg";
import MailSvg from "../svg/mail.svg";
import ResumeSvg from "../svg/resume.svg";
import CameraSvg from "../svg/camera.svg";
import PhoneSvg from "../svg/phone.svg";
import ContactSvg from "../svg/contact.svg";

interface IProfileData {
    name: string;

}


const Home: NextPage = () => {
    const profileData = {
        name: "Runkun Miao",
        profilePicSrc: "/portrait.jpg",
        title: "lead business development",
        linkedInUrl: "https://www.linkedin.com/in/ingleanthony/",
        email: "ingle.anthony@icloud.com",
        phone: "+17273310866",
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{`${profileData.name}, GoPower`}</title>
                <meta name="description" content={`${profileData.name}'s Profile`} />
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
                <meta
                    property="og:description"
                    content="Business Profile"
                />
                <meta property="og:image" content={profileData.profilePicSrc} />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1024" />
            </Head>
            <header className={styles.header}>
                <Wave color1="#162645" color2="#7184A9" />
                <div className={styles.imageContainer}>
                    <Image
                        src={profileData.profilePicSrc}
                        height={1024}
                        width={1024}
                        alt={profileData.name}
                        className={styles.image}
                    />
                </div>
            </header>
            <main className={styles.main}>
                <section className={styles.about}>
                    <h1 className={styles.name}>{profileData.name}</h1>
                    <p className={styles.description1}>
                        {profileData.title}
                    </p>
                    <p className={styles.description2}>GoPower, Inc.</p>
                </section>

                <section className={styles.links}>
                    <ImageLink
                        src={LinkedInSvg}
                        alt="LinkedIn"
                        link={profileData.linkedInUrl}
                    />
                    <ImageLink
                        src={MailSvg}
                        alt="Email"
                        link={`mailto:${profileData.email}`}
                    />
                    <ImageLink src={PhoneSvg} alt="Phone Number" link={`tel:${profileData.phone}`} />
                </section>

                <section className={styles.rowLinks}>

                    <RowLink
                        text="GoPower website"
                        imageSrc={CameraSvg}
                        link="https://gopower.live"
                    />
                </section>
            </main>
        </div>
    );
};

export default Home;
