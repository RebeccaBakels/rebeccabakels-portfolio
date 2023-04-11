/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import styles from "../styles/About.module.css";

export default function FAQ() {
  return (
    <>
      <h1>FAQ</h1>
      <h2>Do I need to be good at math?</h2>
      <p className={styles.paragraph}>
        Not at all, you need to have basic math/order of operations knowledge
        for most developer jobs
      </p>
      <h2>What if I'm not smart enough?</h2>
      <p className={styles.paragraph}>
        You are. I thought the same but you get out what you put into it. It's
        not about being "smart"; it's about being committed fully
      </p>
      <h2>Whats the worst part of the job?</h2>
      <p className={styles.paragraph}>
        Imposter syndrome, my own brain getting in the way, telling me I'm not
        meant to be in this field, being self-defeating. You need to be
        comfortable with not knowing the answers and know the right place to
        find them or reach out for help.
      </p>
    </>
  );
}
