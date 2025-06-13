import TitleBar from "../components/TitleBar";

import Experience from "../components/cvComponents/experience";
import Education from "../components/cvComponents/Education";
import styles from "./Cv.module.css";
import Qualifications from "../components/cvComponents/Qualifications";
export default function Cv() {
  return (
    <>
      <TitleBar />
      <div className={styles["cv-page"]}>
        <div className={styles["cv-container"]}>
          <Education />
          <Experience />
        </div>
        <div className={styles["cv-container"]}>
          <Qualifications />
          <Experience />
        </div>
      </div>
    </>
  );
}
