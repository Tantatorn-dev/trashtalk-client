import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Terra Trashtalk</title>
        <meta name="description" content="A Web Client of Terra Trashtalk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-mono text-center m-12">Terra Trashtalk</h1>
      <h2 className="text-xl font-mono text-center">A decentralized forum on Terra Network</h2>
    </div>
  );
};

export default Home;
