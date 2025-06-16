import styles from "./ProjectTileButtons.module.css";

export default function ProjectTileButtons({ repository }) {
  return (
    <div className={styles["button-container"]}>
      {repository && (
        <button
          className={styles["tile-button"]}
          onClick={() => window.open(repository, "_blank")}
        >
          Repo
        </button>
      )}

      <button className={styles["tile-button"]}>View Web</button>
    </div>
  );
}
