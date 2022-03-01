import Image from "next/image";
import { FC } from 'react';
import React from "react";
import styles from "../styles/RowLink.module.less";
import RightArrow from "../svg/arrow-right.svg";

interface IRowLink {
  text: string;
  link: string;
  imageSrc: string;
}

export const RowLink: FC<IRowLink> = ({ text, link, imageSrc }) => {
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
