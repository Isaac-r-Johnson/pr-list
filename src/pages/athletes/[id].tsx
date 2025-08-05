import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { athletes } from "@/athletes";

export default function AthletePage() {
  const router = useRouter();
  const { id } = router.query;

  const athlete = athletes.find(a => a.id === id);

  if (!athlete) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Athlete Not Found</h1>
          <p className={styles.landingDescription}>
            Sorry, we couldn't find an athlete with that ID.
          </p>
        </main>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>About {athlete.name} | Athlete PR</title>
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.athleteCard} style={{ maxWidth: 500, width: "100%" }}>
            <img
              src={athlete.image}
              alt={athlete.name}
              className={styles.athleteImage}
              style={{ width: 96, height: 96 }}
            />
            <div className={styles.athleteInfo}>
              <h2 className={styles.athleteName} style={{ fontSize: "2rem", marginBottom: "8px" }}>
                {athlete.name}
              </h2>
              <div className={styles.athleteAge} style={{ fontSize: "1.1rem", marginBottom: "16px" }}>
                <strong>Age:</strong> {athlete.age}
              </div>
              <div className={styles.athleteEvent} style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
                <strong>Event:</strong> {athlete.event}
              </div>
              <div className={styles.athleteSplit} style={{ fontSize: "1.1rem" }}>
                <strong>Personal Record:</strong> {athlete.splitTime}
              </div>
            </div>
          </div>
          <p className={styles.landingDescription} style={{ marginTop: 32 }}>
            {athlete.name} is a standout athlete in the {athlete.event} event.<br />
            Their personal record is <strong>{athlete.splitTime}</strong>.<br />
            Celebrate their achievements and get inspired by their dedication and performance!
          </p>
        </main>
      </div>
    </>
  );
}