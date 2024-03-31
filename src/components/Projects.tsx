"use client";

import React, { useState } from "react";
import Image from "next/image"; // Importing next/image
import Separator from "./Separator";
import { projectsData } from "@/lib/data";
import { FaGithub, FaGlobe } from "react-icons/fa";
import ToggleButton from "./ToggleButton";
import { GridDisplay } from "./GridDisplay";
import { useToggleDisplay } from "@/hooks/useToggleDisplay";

interface Project {
  id: string;
  title: string;
  link?: string;
  live?: boolean;
  image?: string;
  description: string;
  technologies: string[];
  github?: string;
}

export const Projects: React.FC = () => {
  const { visibleItems, showMore, showLess, isExpanded } = useToggleDisplay({
    breakpoint: 768,
    initialLarge: 3,
    initialSmall: 1,
    dataLength: projectsData.length,
  });

  const renderItem = (project: Project) => (
    <div
      key={project.id}
      className="flex flex-col shadow-xl rounded-lg bg-white h-full"
    >
      <div className="p-6 flex-grow">
        <a
          href={project.link ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 font-bold text-xl mb-2 ${
            project.link ? "hover:underline" : ""
          }`}
        >
          {project.title}
          {project.live && (
            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
          )}
        </a>
        <hr className="w-full bg-gray-300 mb-5 h-0.5" />
        {project.image && (
          <div className="relative hidden md:block md:w-full md:h-60 lg:h-72 xl:h-80 2xl:h-96 mb-4 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <p className="mb-4">{project.description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {project.technologies.map((tag, index) => (
            <li
              key={index}
              className="bg-blue-300 bg-opacity-75 px-3 py-1 text-gray-900 text-xs rounded-full shadow-lg"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center p-4 justify-start gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-800 hover:text-black" />
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-2xl text-blue-500 hover:text-blue-700" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full p-1 mb-20">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <Separator />
      <GridDisplay
        data={projectsData.slice(0, visibleItems)}
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
