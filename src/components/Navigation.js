import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

// This component defines a navigation bar with links to Home, Projects, and About Me pages.
// It uses NavLink from react-router-dom to create links.

export default function Navigation() {
  return (
    <nav className={styles["navigation-container"]}>
      <NavLink to="/" className={styles["nav-button"]}>
        Home
      </NavLink>
      <NavLink to="/cv" className={styles["nav-button"]}>
        Curriculum Vitae
      </NavLink>
      <NavLink to="/about" className={styles["nav-button"]}>
        About Me
      </NavLink>
    </nav>
  );
}
