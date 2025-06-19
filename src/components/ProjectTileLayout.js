import styles from "./ProjectTileLayout.module.css";

// This component serves as a layout for project tiles
// The childre will be the individual project tiles passed in from the HomePage component.

export default function ProjectTileLayout({ children }) {
  return <div className={styles["project-container"]}>{children}</div>;
}
