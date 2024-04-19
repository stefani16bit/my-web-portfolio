import "./App.css";
import Selfie from "./components/page-biography/Selfie.js";
import DigitalArt from "./components/page-biography/DigitalArt.js";
import Bio from "./components/page-biography/Bio.js";
import DragButton from "./components/DragButton.js";
import ProjectHolder from "./components/page-projects/ProjectHolder.js";

import Project from "./models/Project.js";

const projects = [
  new Project("Project 1", "Descrição do primeiro projeto", await import ("./assets/projects/1/imports.js")),
  new Project("Project 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum volutpat tincidunt. Sed convallis sed velit at pharetra. Morbi vel finibus eros, quis aliquam dolor. Donec ac nulla a felis pretium venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam scelerisque pellentesque tincidunt. Pellentesque aliquam, augue in laoreet ultrices, metus ipsum finibus orci, a aliquet erat nisi sed sapien. Praesent faucibus convallis mi in fermentum. Phasellus ut justo nisi. Donec est diam, dapibus vel auctor sed, venenatis sed tellus. Duis pulvinar consectetur sapien a ullamcorper. Quisque efficitur risus erat, eget volutpat erat consectetur sit amet. Duis a malesuada ex. In facilisis, diam facilisis suscipit commodo, tortor libero lacinia augue, vitae venenatis risus odio vitae urna. Curabitur semper et felis quis cursus. Morbi tempus non mi eget mattis.", await import ("./assets/projects/1/imports.js")),
  new Project("Project 3", "Descrição do terceiro projeto", await import ("./assets/projects/1/imports.js")),
  new Project("Project 4", "Descrição do quarto projeto", await import ("./assets/projects/1/imports.js")),
]

function App() {
  return (
    <div>
      <div className="div-principal">
        <div className="biography-container">
          <Selfie />
          <Bio />
          <DigitalArt />
        </div>
        <DragButton dragdown="false" />
      </div>

      <div className="div-principal">
        <DragButton dragdown="true" />
        <ProjectHolder projects={projects} />
      </div>
    </div>
  );
}

export default App;
