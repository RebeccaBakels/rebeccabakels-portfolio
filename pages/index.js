/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rebecca Bakels Portfolio</title>
        <meta
          name="description"
          content="potfolio for software engineer Rebecca Bakels"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I'm Rebecca </h1>

        <p className={styles.description}>
          Welcome in, make yourself at home, and learn a little more about me...
        </p>
        <div className={styles.summary_container}>
          <p className={styles.summary}>
            Software engineer, tech community advocate, and corgi mom based out
            of South Florida with a mission to continuously grow and encourage
            others to start their journey in tech
          </p>
        </div>
        <div>
          <h2 className={styles.summary_right}>Gather around the campfire</h2>
          <a
            className={styles.link_right}
            href="https://youtu.be/V-xS3g1RLhQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Going from Retail Manager to Software Engineer in 6 Months &rarr;
          </a>
        </div>
        <div className={styles.summary_container}>
          <h2 className={styles.summary}>Curl up with a book</h2>
          <a
            className={styles.link_left}
            href="https://techhubsouthflorida.org/stronger-together/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stronger Together | South Florida's United Future as a Tech Hub
            &rarr;
          </a>
          <a
            className={styles.link_left}
            href="https://techhubsouthflorida.org/crossing-county-lines-tech-hub-partners-collaborate-for-students/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crossing County Line | Tech Hub Partners Collaborate for Students
            &rarr;
          </a>
          <a
            className={styles.link_left}
            href="https://techhubsouthflorida.org/teeing-off-2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teeing Off 2021 with Tech Hub South Florida &rarr;
          </a>
          <a
            className={styles.link_left}
            href="https://rebeccabakels.medium.com/how-i-made-my-first-unity-game-in-six-hours-f7358075db36"
            target="_blank"
            rel="noopener noreferrer"
          >
            How I Made My First Unity Game in Six Hours &rarr;
          </a>
        </div>
        <div>
          <h2 className={styles.summary_right}>Lets be friends</h2>
          <a
            className={styles.link_right}
            href="https://twitter.com/Beccalytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter &rarr;
          </a>
          <a
            className={styles.link_right}
            href="https://www.linkedin.com/in/rebecca-bakels/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn &rarr;
          </a>
          <a
            className={styles.link_right}
            href="https://www.instagram.com/rebonkabee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram &rarr;
          </a>
        </div>
      </main>
    </div>
  );
}
