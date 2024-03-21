"use client";

import React, { useState } from "react";
import { projectsData } from "@/lib/data";

const INITIAL_VISIBLE_PROJECTS = 2;

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_VISIBLE_PROJECTS
  );

  const showMore = () => {
    console.log("showMore");
    setVisibleProjects(projectsData.length);
  };

  const showLess = () => {
    setVisibleProjects(INITIAL_VISIBLE_PROJECTS);
  };

  return (
    <div className="space-y-4">
      {projectsData.slice(0, visibleProjects).map((project) => (
        <div key={project.id} className="p-4 shadow rounded bg-white">
          <h3 className="font-bold text-xl">{project.title}</h3>
          <p>{project.description}</p>
          <div className="mt-2">
            <span className="font-semibold">Technologies Used: </span>
            {project.technologies.join(", ")}
          </div>
          {project.link && (
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </div>
      ))}
      {projectsData.length > INITIAL_VISIBLE_PROJECTS &&
        (visibleProjects > INITIAL_VISIBLE_PROJECTS ? (
          <button onClick={showLess} className="mt-4 text-blue-500">
            Show Less
          </button>
        ) : (
          <button onClick={showMore} className="mt-4 text-blue-500">
            Show More
          </button>
        ))}
    </div>
  );
};
