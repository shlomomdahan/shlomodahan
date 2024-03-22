"use client";

import React, { useState } from "react";
import Image from "next/image"; // Importing next/image
import Separator from "./Separator";
import { projectsData } from "@/lib/data";
import { FaGithub, FaGlobe } from "react-icons/fa";
import useResponsiveShowMore from "@/hooks/useResponsiveProjectsView";
import ToggleButton from "./ToggleButton";

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useResponsiveShowMore({
    breakpoint: 768, // breakpoint for small vs large screen
    initialLarge: 3, // initial number of projects for large screens
    initialSmall: 1, // initial number of projects for small screens
  });

  const showMore = () => {
    setVisibleProjects(projectsData.length);
  };

  const showLess = () => {
    setVisibleProjects(window.innerWidth > 768 ? 3 : 1);
  };

  const isExpanded = visibleProjects === projectsData.length;

  return (
    <div className="w-full p-1 mb-20">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="flex flex-col shadow-xl rounded-lg bg-white h-full"
          >
            <div className="p-6 flex-grow">
              {" "}
              <a
                href={project.link ? project.link : undefined} // Only set href if project.link exists
                target="_blank"
                rel="noopener noreferrer" // Always good practice for external links
                className={`inline-flex items-center gap-1 font-bold text-xl mb-2 ${
                  project.link ? "hover:underline" : "" // Conditionally apply hover:underline
                }`}
              >
                {project.title}
                {project.live && (
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span> // Conditional rendering of the green circle
                )}
              </a>
              <hr className="w-full bg-gray-300 mb-5 h-0.5" />
              {project.image && (
                <div
                  className="relative hidden md:block md:w-full md:h-60 lg:h-72 xl:h-80 2xl:h-96 mb-4 rounded-lg overflow-hidden shadow-xl"
                  style={{ width: "100%", height: "300px" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    // layout="fill"
                    fill // Updated usage for Next.js 13
                    sizes="(max-width: 768px) 100vw, 50vw" // Example sizes value
                    style={{ objectFit: "cover" }} // Applying objectFit via style if needed
                  />
                </div>
              )}
              <div className="mt-4">
                <p className="mb-4">{project.description}</p>
                {/* <span className="font-semibold">Technologies Used: </span> */}
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {project.technologies.map((tag, index) => (
                    <li
                      className="bg-blue-300 bg-opacity-75 px-3 py-1 text-gray-900 text-xs rounded-full shadow-lg"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center p-4 justify-start gap-4">
              {" "}
              {/* Container for links */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl text-gray-800 hover:text-black" />{" "}
                  {/* GitHub Icon */}
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-2xl text-blue-500 hover:text-blue-700" />{" "}
                  {/* World Icon for project link */}
                </a>
              )}
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
