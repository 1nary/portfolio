import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gray } from "@mui/material/colors";
import logo from "../public/logo.jpg";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";
import Link from "next/link";
import { GITHUB, TWITTER } from "../config/constant";
import { fontSize } from "@mui/system";

export default function Home() {
  return (
    <div className={styles.container} style={{ padding: 0 }}>
      <Head>
        <title>Naritoshi Karimata</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            style={{ borderRadius: "999px", border: "4px solid #fff" }}
            width={150}
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <h1 className={styles.name}>狩俣 成駿</h1>
          <p className={styles.subtext}>WEBエンジニア志望</p>
        </div>
        <div className={styles.social}>
          <Link href={TWITTER} target='_blank' rel="noopener noreferrer">
            <Image width={28} src={twitter} alt="logo" />
          </Link>
          <Link href={GITHUB} target='_blank' rel="noopener noreferrer">
            <Image width={28} src={github} alt="logo" />
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 Naritoshi Karimata</p>
      </footer>
    </div>
  );
}
