import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import ImageLink from "../components/ImageLink";
import RowLink from "../components/RowLink";

import GitHubSvg from "../svg/github.svg";
import LinkedInSvg from "../svg/linkedin.svg";
import MailSvg from "../svg/mail.svg";
import ResumeSvg from "../svg/resume.svg";
import CameraSvg from "../svg/camera.svg";
import PhoneSvg from "../svg/phone.svg";
import ContactSvg from "../svg/contact.svg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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

      <header className={styles.header}>
        <Wave color1="#162645" color2="#7184A9" />
        <div className={styles.imageContainer}>
          <Image
            src="/portrait.jpg"
            height={1024}
            width={1024}
            alt="Anthony Ingle"
            className={styles.image}
          />
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.about}>
          <h1 className={styles.name}>Anthony Ingle</h1>
          <p className={styles.description1}>
            C.S. Student at Florida State University
          </p>
          <p className={styles.description2}>Tallahassee, FL</p>
        </section>

        <section className={styles.links}>
          <ImageLink
            src={GitHubSvg}
            alt="GitHub"
            link="https://github.com/ingleanthony"
          />
          <ImageLink
            src={LinkedInSvg}
            alt="LinkedIn"
            link="https://www.linkedin.com/in/ingleanthony/"
          />
          <ImageLink
            src={MailSvg}
            alt="Email"
            link="mailto:ingle.anthony@icloud.com"
          />
          <ImageLink src={PhoneSvg} alt="Phone Number" link="tel:7273310866" />
        </section>

        <section className={styles.rowLinks}>
          <a href="/Anthony_Ingle.vcf">
            <div className={styles.contactButton}>
              <Image src={ContactSvg} alt="Download Contact" />
              <p>Download Contact</p>
            </div>
          </a>

          <RowLink
            text="Resume"
            imageSrc={ResumeSvg}
            link="/Anthony_Ingle_Resume_2022.pdf"
          />
          <RowLink
            text="Photography Website"
            imageSrc={CameraSvg}
            link="https://www.anthonyinglephotos.com"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
