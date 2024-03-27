import React from "react";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Experiences } from "@/components/Experiences";
import Footer from "@/components/Footer";
import Head from "next/head";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ position: "relative", zIndex: 1 }}>
        {" "}
        <main className="min-h-screen py-10 px-20">
          <BackgroundGradientAnimation />
          <Intro />
          <Projects />
          <Experiences />
          <Footer />
        </main>
      </div>
    </>
  );
}
