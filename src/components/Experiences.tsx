"use client";

import React from "react";
import Image from "next/image";
import Separator from "./Separator";
import { experienceData } from "@/lib/data";
import useResponsiveProjects from "@/hooks/useResponsiveProjectsView"; // Assuming this hook can be reused or adapted for experiences
import ToggleButton from "./ToggleButton";

export const Experiences = () => {
  const [visibleExperiences, setVisibleExperiences] = useResponsiveProjects({
    breakpoint: 768,
    initialLarge: 3,
    initialSmall: 1,
  });

  const showMore = () => {
    setVisibleExperiences(experienceData.length);
  };

  const showLess = () => {
    setVisibleExperiences(window.innerWidth > 768 ? 3 : 1);
  };

  const isExpanded = visibleExperiences === experienceData.length;

  return (
    <div className="w-full p-1 mb-20">
      <h1 className="sm:text-4xl text-3xl font-bold mb-5 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Experiences
      </h1>
      <Separator />
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3.5xl:grid-cols-4 gap-10">
        {experienceData.slice(0, visibleExperiences).map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col shadow-xl rounded-lg bg-white bg-opacity-30 h-full"
          >
            <div className="p-6 flex-grow">
              <h2 className="font-bold text-xl mb-2 text-gray-100">
                {experience.title} at {experience.company}
              </h2>
              <hr className="w-full bg-gray-300 mb-5 h-0.5" />
              {experience.image && (
                <div
                  className="relative hidden md:block md:w-full md:h-60 lg:h-72 xl:h-80 2xl:h-96 mb-4 rounded-lg overflow-hidden shadow-xl"
                  style={{ width: "100%", height: "300px" }}
                >
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill // Updated usage for Next.js 13
                    sizes="(max-width: 768px) 100vw, 50vw" // Example sizes value
                    style={{ objectFit: "cover" }} // Applying objectFit via style if needed
                  />
                </div>
              )}
              <h3 className="text-md mb-4 font-semibold text-gray-100">
                {experience.date}
              </h3>
              <p className="mb-4 text-gray-100">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-start mt-6">
        <ToggleButton
          onClick={isExpanded ? showLess : showMore}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
};
