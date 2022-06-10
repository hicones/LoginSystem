import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ProtectedLayout } from "../src/components/ProtectedLayout";
import styles from "../styles/Home.module.scss";

import { AuthContext } from "../src/context/AuthContext";
import { useContext } from "react";

const Home: NextPage = () => {
  const { signOut, user } = useContext(AuthContext);

  return (
    <ProtectedLayout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome <a href="#">{user?.name ? user?.name : "Henrique"}</a>
          </h1>

          <p className={styles.description}>
            <code className={styles.code}>{user?.email}</code>
          </p>

          <div className={styles.grid}>
            <a href={user?.photoURL} className={styles.card}>
              <h2>Profile &rarr;</h2>
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://avatars.githubusercontent.com/u/59674959?v=4"
                }
                width="120px"
                alt="userImage"
              />
            </a>
            <a onClick={signOut} className={styles.card}>
              <h2>Logout &rarr;</h2>
              <p>Fazer Logout</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </ProtectedLayout>
  );
};

export default Home;
