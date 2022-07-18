import React from "react";
import Head from "next/head";
import Jobs from "../components/Jobs";
import Education from "../components/Education";
const resume = () => {
  return (
    <>
      <Head>
        <title>Mike || Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jobs />
      <Education />
    </>
  );
};

export default resume;
