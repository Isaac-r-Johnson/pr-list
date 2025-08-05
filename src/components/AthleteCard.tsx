import React from "react";
import styles from "@/styles/Home.module.css";

type AthleteCardProps = {
  image: string;
  name: string;
  age: number;
  event: string;
  splitTime: string;
};

export default function AthleteCard({
  image,
  name,
  age,
  event,
  splitTime,
}: AthleteCardProps) {
  return (
    <div className={styles.athleteCard}>
      <img
        src={image}
        alt={name}
        className={styles.athleteImage}
      />
      <div className={styles.athleteInfo}>
        <div className={styles.athleteName}>{name}</div>
        <div className={styles.athleteAge}>Age: {age}</div>
        <div className={styles.athleteEvent}>
          <span style={{ fontWeight: 500 }}>Event:</span> {event}
        </div>
        <div className={styles.athleteSplit}>
          <span style={{ fontWeight: 500 }}>PR:</span> {splitTime}
        </div>
      </div>
    </div>
  );
}