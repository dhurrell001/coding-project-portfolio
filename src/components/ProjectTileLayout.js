import styles from "./ProjectTileLayout.module.css";

export default function ProjectTileLayout({ children }) {
  // This component serves as a layout for project tiles
  return <div className={styles["project-container"]}>{children}</div>;
}
