import "./App.css";
import ProjectTile from "./components/ProjectTile";
import ProjectTileLayout from "./components/ProjectTileLayout";
import AboutMe from "./components/AboutMe";
import TitleBar from "./components/TitleBar";
import calcImage from "./assets/calculator-424564_1280.jpg"; // Adjust the path as necessary
import cardImage from "./assets/pexels-pnw-prod-8250913.jpg"; // Adjust the path as necessary
function App() {
  return (
    <>
      <TitleBar />
      <div className="main-container">
        <ProjectTileLayout>
          <ProjectTile
            title="Plaster Calculator"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mollis lacus. Vivamus ullamcorper felis purus, "
            image={calcImage}
          />
          <ProjectTile
            title={"JS Flashcards"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mollis lacus. Vivamus ullamcorper felis purus, "
            image={cardImage}
          />
          <ProjectTile />
          {/* s<ProjectTile /> */}
        </ProjectTileLayout>
        <AboutMe />
      </div>
    </>
  );
}

export default App;
