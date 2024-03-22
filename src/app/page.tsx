import React from "react";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Experiences } from "@/components/Experiences";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen py-10 px-20 absolute z-[-2] bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,#c3dbfa_100%)]">
        <Intro />
        <Projects />
        <Experiences />
        <Footer />
      </main>
    </>
  );
}
