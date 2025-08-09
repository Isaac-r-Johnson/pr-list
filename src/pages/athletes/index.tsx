import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AthleteCard from "@/components/AthleteCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAthletes() {
      const response = await fetch("/api/athletes");
      const data = await response.json();
      setAthletes(data);
      setLoading(false);
    }
    fetchAthletes();
  }, []);
  return (
    <>
      <Head>
        <title>Athlete Track PR List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Athlete PRs</h1>
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <div className={styles.cardContainer}>
            {athletes.map((athlete: any) => (
              <Link
                href={`/athletes/${athlete.id}`}
                key={athlete.id}
                className={styles.cardLink}
              >
                <AthleteCard {...athlete} />
              </Link>
            ))}
          </div>
          )}
        </main>
      </div>
    </>
  );
}
