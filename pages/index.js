/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Info from "../components/Info";
import Background from "../components/Background";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rebecca Bakels</title>
        <meta
          name="description"
          content="Portfolio for Rebecca Bakels, software engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Background />
        <Info />
      </main>
    </div>
  );
}
