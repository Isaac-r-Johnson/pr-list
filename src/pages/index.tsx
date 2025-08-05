import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Athlete Track PR List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.heading} style={{ textAlign: "center", marginBottom: "24px" }}>
            Track Your Greatness
          </h1>
          <p className={styles.landingDescription}>
            Discover and celebrate personal records of athletes.<br />
            Explore achievements, track progress, and get inspired by the best performances in track and field.
          </p>
          <div className={styles.ctas}>
            <Link href="/athletes" passHref legacyBehavior>
              <a className={styles.primaryButton}>View Athlete PRs</a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}