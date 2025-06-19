import styles from "./ProjectTileButtons.module.css";

export default function ProjectTileButtons({ repository, website }) {
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
      {website && (
        <button
          className={styles["tile-button"]}
          onClick={() => window.open(website, "_blank")}
        >
          Website
        </button>
      )}
    </div>
  );
}
