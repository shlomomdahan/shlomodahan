import React from "react";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Experiences } from "@/components/Experiences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // <main className="min-h-screen py-10 px-20 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#7fa2db_100%)]">
    <main className="min-h-screen py-10 px-20 absolute top-0 z-[-2] bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,#c3dbfa_100%)]">
      <Intro />
      <Projects />
      <Experiences />
      <Footer />
    </main>
  );
}
