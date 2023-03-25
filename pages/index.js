import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.jpg";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";
import Link from "next/link";
import { GITHUB, TWITTER } from "../config/constant";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Home() {
  return (
    <div className={styles.container} style={{ padding: 0 }}>
      <Head>
        <title>Naritoshi Karimata</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.PNG" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
          <div>
            <Image
              style={{ borderRadius: "999px", border: "4px solid #fff" }}
              width={160}
              src={logo}
              alt="logo"
            />
          </div>
          <div className={styles.profile}>
            <h1 className={styles.profile_name}>狩俣 成駿</h1>
            <p className={styles.profile_job}>WEBエンジニア志望</p>
            <p className={styles.profile_description}>
              沖縄県でプログラミングを学んでいる24卒の就活生 /
              思いやりをカタチにして届けられるWEBエンジニアになりたい /
              月１で映画鑑賞 / 好きな言葉は「Don&apos;t think, just
              do.」(トムクルーズ)
            </p>
          </div>
          <div className={styles.social}>
            <Link href={TWITTER} target="_blank" rel="noopener noreferrer">
              <Image width={28} src={twitter} alt="logo" />
            </Link>
            <Link href={GITHUB} target="_blank" rel="noopener noreferrer">
              <Image width={28} src={github} alt="logo" />
            </Link>
          </div>
        </div>
        <Button
          sx={{
            padding: "12px 24px",
            borderRadius: 10,
            letterSpacing: 1.5,
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#435274", transition: ".3s" },
            position: "absolute",
            bottom: 32,
            right: 32,
          }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          CONTACT
        </Button>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 Naritoshi Karimata</p>
      </footer>
    </div>
  );
}
