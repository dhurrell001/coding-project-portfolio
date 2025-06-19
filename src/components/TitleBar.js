import styles from "./TitleBar.module.css";
import Navigation from "./Navigation";
// This component defines the title bar of the application.
// It includes the main title and the navigation bar.
export default function TitleBar() {
  return (
    <div className={styles["title-bar"]}>
      <h1 className={styles["title"]}>Project Portfolio</h1>
      <Navigation />
    </div>
  );
}
