/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import styles from '../styles/Home.module.css';

function Info() {
  return (
    <>
      <div className={styles.padding}>
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
        <div className={styles.right_container}>
          <svg
            height={250}
            viewBox="0 0 123 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M90.6513 159C105.335 149.401 114.343 145.064 118.652 121.5C123.957 86.5554 116.342 74.157 77.1511 24.0002C78.7511 36.0168 78.1127 41.0339 75.6511 48.5002C66.5551 26.1635 59.0276 11.3469 63.1511 1.50018L34.1511 37.0002C23.5327 53.2646 19.9542 63.7061 24.6508 88.5002C21.8462 85.9814 18.9057 82.467 8.65085 68.5002C11.0698 74.1316 11.3334 78.5677 8.65085 85.5002C-0.530856 115.449 0.12321 124.165 8.58688 137.715C20.8353 153.28 31.7237 162.054 43.6511 165.464M90.6513 159C104.018 144.823 110.719 136.181 96.6516 98.0002M90.6513 159C90.7078 158.94 90.7645 158.88 90.8208 158.821M96.6516 98.0002C90.3559 104.8 87.9916 106.693 87.1513 104.5C82.3653 94.9581 81.8588 87.1559 85.1513 68.5002C81.2339 75.4709 78.9611 78.8382 74.1511 79.5002C70.9466 63.6032 68.3909 55.157 50.1511 48.5002C54.1053 74.0239 51.9366 87.1658 32.6511 106.5C30.0502 103.795 28.6922 102.181 30.6508 95.0002C19.8701 102.076 18.9582 110.466 19.1508 127C20.0492 135.949 20.7312 141.633 24.6508 152.5L43.6511 165.464M96.6516 98.0002C110.66 136.02 104.075 144.75 90.8208 158.821M43.6511 165.464C57.0277 169.289 71.7117 166.368 91.0874 158.716C90.9983 158.751 90.9097 158.786 90.8208 158.821M43.6511 165.464C37.4513 153.301 36.0492 145.833 45.1511 125.5C51.707 114.729 57.3119 109.915 69.1511 102.5C67.0772 112.773 68.7639 117.825 77.1511 125.5C80.0467 120.9 80.8074 119.144 81.6513 116.5C84.4182 122.563 87.1794 125.486 91.0874 135C95.1333 141.977 94.1559 147.216 87.1513 158.716M43.6511 165.464C56.9662 169.271 71.577 166.394 90.8208 158.821"
              className={styles.stroke}
            />
          </svg>

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
          <svg
            viewBox="0 0 309 154"
            fill="none"
            height={180}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M202.5 100.162C236.221 71.7836 258.146 67.2893 286 71C258.297 67.3095 236.459 71.735 203.049 99.701M202.5 100.162C179.446 90.7407 165.06 96.3907 108 121.5L91.5 140.5C30.4004 92.6013 14.2516 76.4408 16.5 65M202.5 100.162C202.683 100.008 202.866 99.8539 203.049 99.701M202.5 100.162C203.652 101.066 204.818 102.013 206 103M202.5 100.162C173.119 77.0993 152.473 81.0896 101 120M16.5 65C56.4554 29.252 77.0004 20.7928 109.5 31.5002M16.5 65C21.6402 60.4011 26.4592 56.2537 31.0236 52.5408M109.5 31.5002C166.495 58.161 180.315 74.2934 206 103M109.5 31.5002C81.1814 22.1703 61.9394 27.3926 31.0236 52.5408M109.5 31.5002C164.275 57.1224 179.173 73.0205 203.049 99.701M109.5 31.5002V24.5764M206 103C174.691 76.84 154.492 79.5634 101 120M206 103L204.623 101.461C204.094 100.869 203.569 100.282 203.049 99.701M101 120C58.6389 95.5076 47.2482 78.1417 27.5 47.0002M101 120C61.2185 96.999 48.7503 80.2831 31.0236 52.5408M27.5 47.0002C58.7247 20.282 97.5291 10.3046 114 28.5002M27.5 47.0002C28.7026 48.8966 29.8742 50.7418 31.0236 52.5408M27.5 47.0002C56.1568 22.4792 91.198 12.0588 109.5 24.5764M114 28.5002C117.609 14.4412 140.07 9.89546 184.5 2.50024C263.715 36.5043 268.446 54.5935 303 87.5C253.253 83.2498 236.761 98.2679 206 123C187.242 95.7878 142.463 119.833 94.5 151C55.0051 122.225 18.7386 91.4533 2 68.5M114 28.5002C112.645 27.0039 111.14 25.6981 109.5 24.5764"
              className={styles.stroke}
            />
          </svg>
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
            Crossing County Lines | Tech Hub Partners Collaborate for Students
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
        <div className={styles.right_container}>
          <svg
            height={150}
            viewBox="0 0 190 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 144C7.5 140.5 12.5749 139.423 9.99927 123.5M18.4986 86.0005C5.57934 52.1936 3.99884 8.00049 15.9988 3.50047C27.9988 -0.999543 52.6052 14.3577 70.9983 34.5005M18.4986 86.0005C13.8537 95.6673 12.1163 104.343 9.99927 123.5M18.4986 86.0005L24.9987 70.0005M70.9983 34.5005C81.5931 33.5998 86.2918 34.9095 94.4983 37.5005C107.087 33.9832 113.931 33.7601 125.998 34.5005M70.9983 34.5005L60.9978 37.5005M125.998 34.5005C145.184 11.1979 155.911 4.22286 174.999 3.50047C191.761 12.4835 189.492 43.964 177.999 86.0005M125.998 34.5005L136.999 37.5005M177.999 86.0005C187.135 109.98 184.169 121.693 185.499 144C177.735 105.807 162.348 102.629 136.999 93.5005C130.603 89.7566 129.998 89.5005 123.914 76.5005M177.999 86.0005L171.499 76.5005M116.998 64.5005C123.814 56.7091 126.553 57.5005 133.553 61.0005C140.553 64.5005 137.136 80.5674 123.914 76.5005M116.998 64.5005L123.914 76.5005M116.998 64.5005C114.49 79.778 110.335 85.3757 97.4983 89.5005M116.998 64.5005C99.12 57.5869 90.5201 58.3932 77.498 67.5005M97.4983 89.5005V102.5M97.4983 89.5005C86.1909 85.1475 81.3346 80.9084 77.498 67.5005M97.4983 102.5C104.336 100.372 109.984 102.746 122.86 112.5C127.499 112.403 130.628 110.065 136.999 102.5C136.326 119.338 132.714 124.971 122.86 131M97.4983 102.5C88.7996 99.2219 82.4861 103.638 70.9983 112.5C64.5376 112.189 60.6236 110.151 52.998 102.5C55.7995 116.13 60.0681 122.924 70.9983 134M122.86 131C122.981 152.791 118.602 160.885 97.4983 163C82.8903 160.855 75.4261 158.089 70.9983 134M122.86 131C116.717 125.045 113.253 121.766 106.498 117.5C96.2762 128.137 96.4605 136.43 97.4983 151.5C97.9147 137.716 98.3603 129.961 87.9983 117.5C80.8784 118.764 77.1939 122.775 70.9983 134M77.498 67.5005C75.9208 64.0196 69.4978 55.0005 62.9978 59.5005C56.4978 64.0005 55.9978 73.0005 60.9978 76.5005C65.9978 80.0005 75.8992 73.0433 77.498 67.5005ZM77.498 67.5005C73.1345 78.8788 67.4978 90.0005 58.4978 93.5005C49.4978 97.0005 24.6393 103.792 9.99927 123.5M24.9987 70.0005C16.1455 42.8703 13.3997 32.2343 20.9988 18.5005C31.7079 11.4566 42.3191 16.3778 60.9978 37.5005M24.9987 70.0005C38.5524 50.1589 46.3886 42.4118 60.9978 37.5005M136.999 37.5005C155.942 16.082 161.202 14.4368 167.999 16.5005C178.928 18.7957 180.237 43.6522 171.499 76.5005M136.999 37.5005C155.581 46.2038 161.006 56.8142 171.499 76.5005"
              className={styles.stroke}
            />
          </svg>

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
      </div>
    </>
  );
}
export default Info;
