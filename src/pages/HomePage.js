import "../App.css";
import ProjectTile from "../components/ProjectTile";
import ProjectTileLayout from "../components/ProjectTileLayout";
import AboutMe from "../components/AboutMe";
import TitleBar from "../components/TitleBar";
import projectData from "../data/projectData";
// This is the main home page of the portfolio application.
// It uses the data from projectData.js to render a list of project tiles.
export default function HomePage() {
  return (
    <>
      <TitleBar />
      <div className="main-container">
        <ProjectTileLayout>
          {/* Render project tiles using the project data */}
          {projectData.map((project) => (
            <ProjectTile
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              stack={[project.stack]}
              repository={project.repository}
              website={project.website}
            />
          ))}
        </ProjectTileLayout>

        <AboutMe />
      </div>
    </>
  );
}
