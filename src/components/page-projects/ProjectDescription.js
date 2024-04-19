import React, { useRef, useEffect, useState } from "react";

import Typewritter from "utilities/Typewritter";

import "./ProjectDescription.css";

const ProjectDescription = React.forwardRef(({ state }, ref) => {
  const [firstIteration, setFirstIteration] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    ref.current.addProjectChangedListener((project) => {
      setFirstIteration(false);
      setAnimate(!animate);
    });
  });

  return (
    <div className="project-title-description-container-holder">
      <div className="project-title-description-container">
        <h2 className="project-description-title">
          {(() => {
            return animate && !firstIteration ? <Typewritter speed="10" text={state.title} /> : state.title;
          })()}
        </h2>
      </div>
      <div className="project-title-description-container">
        <p className="project-description">
          {(() => {
            return animate && !firstIteration ? <Typewritter delay="1250" speed="40" text={state.description} /> : state.description;
          })()}
        </p>
      </div>
      {useEffect(() => {
        if (!animate) {
          setAnimate(true);
        }
      })}
    </div>
  );
});

export default ProjectDescription;
