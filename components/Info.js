/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Info() {
  return (
    <>
      <div className={styles.padding}>
        <h2 className={styles.cta}>Click me ↴</h2>
        <h1 className={styles.title}>
          <Link href={"/my-story"} passHref>
            Hi, I'm Rebecca
          </Link>
        </h1>

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
            href="https://youtu.be/V5glQRR-bTI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            &nbsp;Next.js Conf- Waterbeds to Wayfair Competitor
          </a>
          <a
            className={styles.link_right}
            href="https://youtu.be/Nu1DwM1yZhws"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            &nbsp;Job Expectations - The First 90 Days
          </a>
          <a
            className={styles.link_right}
            href="https://youtu.be/V-xS3g1RLhQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            &nbsp;Going from Retail Manager to Software Engineer in 6 Months
          </a>
        </div>
        <div className={styles.summary_container}>
          <svg
            viewBox="0 0 309 154"
            fill="none"
            height={170}
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
            href="https://rebeccabakels.hashnode.dev/discover-city-tech-where-innovation-meets-community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              <path d="m15 5 4 4"></path>
            </svg>
            &nbsp;Discover 'CITY Tech': Where Innovation Meets Community
          </a>
          <a
            className={styles.link_left}
            href="https://techhubsouthflorida.org/stronger-together/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              <path d="m15 5 4 4"></path>
            </svg>
            &nbsp;Stronger Together | South Florida's United Future as a Tech
            Hub
          </a>
          <a
            className={styles.link_left}
            href="https://techhubsouthflorida.org/crossing-county-lines-tech-hub-partners-collaborate-for-students/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              <path d="m15 5 4 4"></path>
            </svg>
            &nbsp;Crossing County Lines | Tech Hub Partners Collaborate for
            Students
          </a>
          <a
            className={styles.link_left}
            href="https://techhubsouthflorida.org/teeing-off-2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              <path d="m15 5 4 4"></path>
            </svg>
            &nbsp;Teeing Off 2021 with Tech Hub South Florida
          </a>
          <a
            className={styles.link_left}
            href="https://rebeccabakels.medium.com/how-i-made-my-first-unity-game-in-six-hours-f7358075db36"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              <path d="m15 5 4 4"></path>
            </svg>
            &nbsp;How I Made My First Unity Game in Six Hours
          </a>
        </div>
        <div className={styles.right_container}>
          <svg
            height={150}
            viewBox="0 0 185 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4989 86.0005C0.579619 52.1936 -1.00088 8.00049 10.9991 3.50047C22.9991 -0.999543 47.6055 14.3577 65.9986 34.5005M13.4989 86.0005C8.85395 95.6673 7.1166 122.343 4.99955 141.5M13.4989 86.0005L19.9989 70.0005M65.9986 34.5005C76.5934 33.5998 81.2921 34.9095 89.4986 37.5005C102.088 33.9832 108.931 33.7601 120.998 34.5005M65.9986 34.5005L55.9981 37.5005M120.998 34.5005C140.185 11.1979 150.912 4.22286 169.999 3.50047C186.761 12.4835 184.492 43.964 172.999 86.0005M120.998 34.5005L131.999 37.5005M172.999 86.0005C182.135 109.98 179.169 121.693 180.499 144C172.735 105.807 157.348 102.629 131.999 93.5005C125.604 89.7566 124.998 89.5005 118.915 76.5005M172.999 86.0005L166.499 76.5005M111.998 64.5005C118.814 56.7091 121.553 57.5005 128.553 61.0005C135.553 64.5005 132.137 80.5674 118.915 76.5005M111.998 64.5005L118.915 76.5005M111.998 64.5005C109.49 79.778 105.335 85.3757 92.4986 89.5005M111.998 64.5005C94.1203 57.5869 85.5204 58.3932 72.4983 67.5005M92.4986 89.5005V102.5M92.4986 89.5005C81.1912 85.1475 76.3349 80.9084 72.4983 67.5005M92.4986 102.5C99.3358 100.372 104.985 102.746 117.86 112.5C122.499 112.403 125.628 110.065 131.999 102.5C131.326 119.338 127.714 124.971 117.86 131M92.4986 102.5C83.7999 99.2219 77.4864 103.638 65.9986 112.5C59.5379 112.189 55.6239 110.151 47.9983 102.5C50.7998 116.13 55.0684 122.924 65.9986 134M117.86 131C117.982 152.791 113.602 160.885 92.4986 163C77.8906 160.855 70.4264 158.089 65.9986 134M117.86 131C111.718 125.045 108.253 121.766 101.499 117.5C91.2764 128.137 91.4607 136.43 92.4986 151.5C92.915 137.716 93.3606 129.961 82.9986 117.5C75.8786 118.764 72.1942 122.775 65.9986 134M72.4983 67.5005C70.9211 64.0196 64.4981 55.0005 57.9981 59.5005C51.4981 64.0005 50.9981 73.0005 55.9981 76.5005C60.9981 80.0005 70.8995 73.0433 72.4983 67.5005ZM72.4983 67.5005C68.1348 78.8788 65.9986 89.5005 53.4981 93.5005C40.9976 97.5005 18.5698 108.54 4.99955 141.5M4.99955 141.5L4.99955 144M19.9989 70.0005C11.1458 42.8703 8.39993 32.2343 15.9991 18.5005C26.7082 11.4566 37.3194 16.3778 55.9981 37.5005M19.9989 70.0005C33.5527 50.1589 41.3889 42.4118 55.9981 37.5005M131.999 37.5005C150.943 16.082 156.202 14.4368 162.999 16.5005C173.928 18.7957 175.237 43.6522 166.499 76.5005M131.999 37.5005C150.581 46.2038 156.007 56.8142 166.499 76.5005"
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
          <a
            className={styles.link_right}
            href="https://rebeccabakels.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hashnode &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
export default Info;
