import React, { useRef, useState, useImperativeHandle } from "react";

import ProjectDescription from "./ProjectDescription.js";
import ProjectShow from "./ProjectShow.js";

import "./ProjectHolder.css";

function ProjectHolder({ projects }) {
  const thisRef = useRef(null);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const projectChangedListeners = [];

  function changeToProject(index) {
    for (const listener of projectChangedListeners) {
      listener(projects[index]);
    }

    setCurrentProject(projects[index]);
  }

  function changeToProjectWrapper(targetProjectIndex) {
    return function () {
      if (projects[targetProjectIndex] != currentProject) {
        changeToProject(targetProjectIndex);
      }
    };
  }

  useImperativeHandle(thisRef, () => ({
    addProjectChangedListener: (listener) => {
      projectChangedListeners.push(listener);
    },
  }));

  return (
    <div>
      <div className="project-container">
        <div className="project-description-container">
          <ProjectDescription state={currentProject} ref={thisRef} />
        </div>
        <div className="project-show-container">
          <ProjectShow state={currentProject} ref={thisRef} />
        </div>
      </div>
      <div className="projects-selector-container">
        {(() => {
          const elements = [];
          for (let index = 0; index < projects.length; index++) {
            elements.push(
              <button onClick={changeToProjectWrapper(index)} className="project-selector">
                {index + 1}
              </button>
            );
          }
          return elements;
        })()}
      </div>
    </div>
  );
}

export default ProjectHolder;
