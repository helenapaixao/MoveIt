import Head from "next/head";
import { ExperienceBar } from "../components/Experience";
import { Profile } from "../components/Profile";
import styles from '../styles/components/Profile.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
}
