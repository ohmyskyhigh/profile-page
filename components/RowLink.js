import Image from "next/image";
import React from "react";
import styles from "../styles/RowLink.module.css";
import RightArrow from "../svg/arrow-right.svg";

export default function RowLink({ text, link, imageSrc }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={styles.container}>
        <Image src={imageSrc} alt={text} />
        <p>{text}</p>
        <Image src={RightArrow} alt="right arrow" />
      </div>
    </a>
  );
}
