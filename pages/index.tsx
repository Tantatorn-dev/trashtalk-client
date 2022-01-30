import type { NextPage } from "next";
import Head from "next/head";
import ConnectButton from "../components/ConnectButton";
import MessageList from "../components/MessageList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Terra Trashtalk</title>
        <meta name="description" content="A Web Client of Terra Trashtalk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row h-32 m-8">
        <h1 className="text-3xl font-mono">Terra Trashtalk</h1>
        <ConnectButton />
      </div>

      <h2 className="text-xl font-mono text-center -mt-8">
        A decentralized forum on Terra Network
      </h2>
      <MessageList />
    </div>
  );
};

export default Home;
