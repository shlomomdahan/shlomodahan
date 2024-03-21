import React from "react";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="w-1/3 p-1 mx-5 ml-20 mb-20">
        <Intro />
      </div>
      <div className="w-1/3 p-1 mx-5 ml-20">
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <hr className="w-full bg-gray-300 mb-5 h-0.5" />
        <Projects />
      </div>
    </main>
  );
}
