import styles from "./Education.module.css";
import Introduction from "./Introduction";
// This component displays a list of education entries.
export default function Education() {
  const educationEntries = [
    {
      institution: "Open University",
      qualification: "Access to Higher Education STEM ",
      year: "2022 - 2023",
      grade: "Distinction",
    },
    {
      institution: "Weston College/Bristol Training Institute",
      qualification: "Python Programming bootcamp",
      year: "2023",

      grade: "Pass",
    },
    {
      institution: "Weston College",
      qualification: "BTEC National Diploma in Computing",
      year: "1991 - 1993",
      grade: "Distinction",
    },
    {
      institution: "Weston College",
      qualification: "BTEC First Diploma in Business and Finance",
      year: "1990 - 1991",

      grade: "Merit",
    },
  ];

  return (
    <div className={styles["education-container"]}>
      <h2>Introduction</h2>
      <Introduction />
      <h2>Education</h2>
      <ul>
        {educationEntries.map((entry, index) => (
          <li key={index} className={styles["education-entry"]}>
            <h3>{entry.institution}</h3>
            <p>{entry.qualification}</p>
            <p>{entry.year}</p>
            <p>Grade: {entry.grade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
