import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import ImageLink from "../components/ImageLink";
import RowLink from "../components/RowLink";
import Portrait from "../images/portrait.jpg";
import GitHubSvg from "../svg/github.svg";
import LinkedInSvg from "../svg/linkedin.svg";
import MailSvg from "../svg/mail.svg";
import ResumeSvg from "../svg/resume.svg";
import CameraSvg from "../svg/camera.svg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Ingle</title>
        <meta name="description" content="Anthony Ingle's Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Wave color1="#162645" color2="#7184A9" />
        <div className={styles.imageContainer}>
          <Image
            src={Portrait}
            alt="Anthony Ingle"
            placeholder="blur"
            className={styles.image}
          />
        </div>
      </header>
      <main className={styles.main}></main>

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
      </section>

      <section>
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
    </div>
  );
};

export default Home;
