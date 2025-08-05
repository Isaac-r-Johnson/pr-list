import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AthleteCard from "@/components/AthleteCard";
import { athletes } from "@/athletes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Athlete Track PR List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Athlete PRs</h1>
          <div className={styles.cardContainer}>
            {athletes.map((athlete, idx) => (
              <AthleteCard key={idx} {...athlete} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
