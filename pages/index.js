import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

//Hello World

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike Bartels | Full Stack Developer </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
