"use client";

import React from "react";
import Image from "next/image";
import { useToggleDisplay } from "@/hooks/useToggleDisplay";
import { GridDisplay } from "./GridDisplay";
import ToggleButton from "./ToggleButton";
import { experienceData } from "@/lib/data";
import Separator from "./Separator";
interface Experience {
  id: string;
  title: string;
  company: string;
  image?: string;
  date: string;
  description: string;
}

export const Experiences: React.FC = () => {
  const { visibleItems, showMore, showLess, isExpanded } = useToggleDisplay({
    dataLength: experienceData.length,
  });

  const renderItem = (experience: Experience) => (
    <div
      key={experience.id}
      className="flex flex-col shadow-xl rounded-lg bg-white h-full"
    >
      <div className="p-6 flex-grow">
        <h2 className="font-bold text-xl mb-2">
          {experience.title} at {experience.company}
        </h2>
        <hr className="w-full bg-gray-300 mb-5 h-0.5" />
        {experience.image && (
          <div
            className="relative w-full h-60 lg:h-72 xl:h-80 2xl:h-96 mb-4 rounded-lg overflow-hidden shadow-xl"
            style={{ width: "100%", height: "300px" }}
          >
            <Image
              src={experience.image}
              alt={experience.title}
              fill // Updated usage for Next.js 13
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <h3 className="text-md mb-4 font-semibold">{experience.date}</h3>
        <p className="mb-4">{experience.description}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full p-1 mb-20">
      <h1 className="text-3xl font-bold mb-5">Experiences</h1>
      <Separator />
      <GridDisplay
        data={experienceData.slice(0, visibleItems)}
        renderItem={renderItem}
      />
      <div className="flex justify-start mt-6">
        <ToggleButton
          onClick={isExpanded ? showLess : showMore}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
};
