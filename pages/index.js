import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Script from "next/script";

//Hello World

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike Bartels | Full Stack Developer </title>
        <meta
          name="description"
          content="A portfolio of Mike Bartels || Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
