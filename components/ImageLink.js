import Image from "next/image";
import React from "react";

export default function ImageLink({ link, alt, src }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image src={src} alt={alt} />
    </a>
  );
}
