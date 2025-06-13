import styles from "./Qualification.module.css";
import { qualificationData } from "../../data/qualificationData";

export default function Qualifications() {
  return (
    <div className={styles["qualification-container"]}>
      <h2>Qualifications</h2>
      {qualificationData.map((data) => (
        <div key={data.category}>
          <h3>{data.category}</h3>
          <ul>
            {data.qualifications.map((qualification, index) => (
              <li key={index}>
                {qualification.title} {qualification.date}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
