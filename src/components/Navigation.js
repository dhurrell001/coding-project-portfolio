import styles from "./Navigation.module.css";

export default function Navigation() {
  function handleHomeClick() {
    alert("Home button clicked");
  }

  return (
    <nav className={styles["navigation-container"]}>
      <button className={styles["nav-button"]} onClick={handleHomeClick}>
        Home
      </button>
      <button className={styles["nav-button"]}>Projects</button>
      <button className={styles["nav-button"]}>About Me</button>
    </nav>
  );
}
