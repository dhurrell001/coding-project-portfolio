import styles from "./ProjectTile.module.css";
import calcImage from "../assets/calculator-424564_1280.jpg"; // Adjust the path as necessary
import ProjectTileButtons from "./ProjectTileButtons";

export default function ProjectTile({ title, description, image }) {
  return (
    <div className={styles["tile-container"]}>
      <img src={image} alt="Project Thumbnail" />
      <h2 className={styles["project-title"]}>{title}</h2>
      <p>{description}</p>
      <div className={styles["buttons-container"]}>
        <ProjectTileButtons />
      </div>
    </div>
  );
}
