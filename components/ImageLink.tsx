import { FC } from "react";
import Image from "next/image";
import React from "react";

interface IImageLink {
  link: string;
  alt: string;
  src: string;
}

export const ImageLink: FC<IImageLink> = ({ link, alt, src })=> {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image src={src} alt={alt} />
    </a>
  );
}
