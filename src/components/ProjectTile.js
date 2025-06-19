import styles from "./ProjectTile.module.css";
import ProjectTileButtons from "./ProjectTileButtons";

// This component  a project tile that displays a project title,
//  description, link to github repo, and an image.
export default function ProjectTile({
  title,
  description,
  stack,
  image,
  repository,
  website,
}) {
  return (
    <div className={styles["tile-container"]}>
      <img src={image} alt="Project Thumbnail" />
      <h2 className={styles["project-title"]}>{title}</h2>
      <p>{description}</p>
      <p>Stack: {stack}</p>
      <div className={styles["buttons-container"]}>
        <ProjectTileButtons repository={repository} website={website} />
      </div>
    </div>
  );
}
