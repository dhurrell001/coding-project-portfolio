import styles from "./ProjectTileButtons.module.css";

export default function ProjectTileButtons() {
  return (
    <div className={styles["button-container"]}>
      <button className={styles["tile-button"]}>Repo</button>
      <button className={styles["tile-button"]}>View Web</button>
    </div>
  );
}
