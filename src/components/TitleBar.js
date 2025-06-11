import styles from "./TitleBar.module.css";
import Navigation from "./Navigation";
export default function TitleBar() {
  return (
    <div className={styles["title-bar"]}>
      <h1 className={styles["title"]}>Project Portfolio</h1>
      <Navigation />
    </div>
  );
}
