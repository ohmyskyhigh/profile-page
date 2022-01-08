import React from "react";
import styles from "../styles/Home.module.css";

export default function Wave({ color1 = "#000000", color2 = "#fff" }) {
  return (
    <svg
      width="100%"
      viewBox="0 0 1080 400"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.wave}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      <path
        id="Path"
        fill="url('#gradient')"
        fillRule="evenodd"
        stroke="none"
        d="M 0 400 C 0 400 248.047638 337.196411 540 335 C 816.837158 332.917297 1080 400 1080 400 L 1080 0 L 0 0 L 0 400 Z"
      />
    </svg>
  );
}
