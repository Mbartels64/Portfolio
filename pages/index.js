import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

//Hello World

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike Bartels | Full Stack Developer </title>
        <meta name="description" content="created by Mike Bartels" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
