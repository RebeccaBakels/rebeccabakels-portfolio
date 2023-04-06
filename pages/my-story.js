/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../styles/MyStory.module.css";

export default function MyStory() {
  return (
    <>
      <div className={styles.container}>
        <h1>My Story</h1>
        <p className={styles.paragraph}>
          In mid-2019, amid the pandemic, I left my unfulfilling job as a retail
          store manager of 5 years due to the lack of work-life balance and the
          impact it had on my mental health. Feeling pushed to the absolute edge
          I put in my two weeks and made the decision to utilize all that energy
          into something that would challenge and grow with me.
        </p>
        <br />
        <p className={styles.paragraph}>
          My sister, Michelle Bakels, a former Gallery Director and Art-History
          Major turned software developer, inspired me to make the switch to
          tech. I saw how happy she was and I couldn't remember the last time I
          could truly say I was happy.
        </p>
        <br />
        <p className={styles.paragraph}>
          I began attending free online tech meetups and seminars through South
          Florida Tech Hub and enrolled in several short courses, including User
          Experience (UX) Design, Intro to Web Dev, and Game Development. After
          completing these courses, I took a 10-week Software Engineering
          bootcamp that was mentally challenging but immensely rewarding. It was
          a mental hurdle to believe I am capable of learning these things, to
          be comfortable with the unknown and understand how to find the right
          answers not memorize them. Imposter syndrome hit me hard about 8 weeks
          in when I realized how much I didn't know and how massive the world of
          tech is. It felt like I was swimming in a pond only to look around and
          realize I was in the middle of the ocean.
        </p>
        <br />
        <p className={styles.paragraph}>
          This is where my support system was key. I had my person, my sister,
          to talk to in those low moments when I thought I really couldn't make
          it through. She heard me out, sympathize with my struggle, gave me the
          reality check I needed, and held me accountable. With her help, I
          completed the bootcamp and went on to land a job as an intern software
          engineer at CITY Furniture, where I joined the digital software
          engineering team. I felt like I was living the dream, making twice as
          much as I did at my previous job and having my weekends and holidays
          to enjoy my life.
        </p>
        <br />
        <p className={styles.paragraph}>
          Today, years after starting my bootcamp, I still wake up every day
          excited to work in tech and pursue opportunities that I never thought
          were possible. <u>If I can do it, so can you.</u>
        </p>
        <br />
      </div>
    </>
  );
}
