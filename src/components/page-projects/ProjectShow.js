import React, { useEffect, useRef, useState } from "react";

import "./ProjectShow.css";

function ProjectShow({ state }) {
  const leftSlider = useRef(null);
  const centerSlider = useRef(null);
  const rightSlider = useRef(null);

  const [lastSlide, setLastSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  function getPreviousSlide(origin) {
    return Math.min(origin == 0 ? state.images.length - 1 : origin - 1, state.images.length);
  }

  function getNextSlide(origin) {
    return Math.min((origin + 1) % state.images.length, state.images.length);
  }

  function previousSlide() {
    if (!isSliding) {
      setSlideDirection("left");
      setIsSliding(true);
      setLastSlide(currentSlide);
      setCurrentSlide(getPreviousSlide(currentSlide));
    }
  }

  function nextSlide() {
    if (!isSliding) {
      setSlideDirection("right");
      setIsSliding(true);
      setLastSlide(currentSlide);
      setCurrentSlide(getNextSlide(currentSlide));
    }
  }

  return (
    <div className="buttons-container">
      <button onClick={previousSlide} className="left-button">
        {"<"}
      </button>
      {
        <div className="project-image-display-container-holder">
          <div className={`project-image-display-container ${isSliding && `slide-image-display-container-${slideDirection}`}`}>
            <img ref={leftSlider} src={state.images[getNextSlide(lastSlide)]} className="project-image" />
            <img ref={centerSlider} src={state.images[isSliding ? lastSlide : currentSlide]} className="project-image" />
            <img ref={rightSlider} src={state.images[getPreviousSlide(lastSlide)]} className="project-image" />
          </div>
        </div>
      }
      <button onClick={nextSlide} className="right-button">
        {">"}
      </button>
      {useEffect(() => {
        if (isSliding) {
          const timeout = setTimeout(() => {
            setIsSliding(false);
          }, 1000);

          return () => clearTimeout(timeout);
        }
      })}
    </div>
  );
}

export default ProjectShow;
