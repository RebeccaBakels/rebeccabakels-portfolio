/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Backgroud from "../components/Background";
import Story from "../components/Story";
import FAQ from "../components/FAQ";
import styles from "../styles/About.module.css";
import Link from "next/link";

export default function MyStory() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link href={"/"} passHref>
            <a style={{ fontSize: "40px" }}>←</a>
          </Link>
          <Backgroud />
          <Story />
          <FAQ />
        </div>
      </div>
    </>
  );
}
