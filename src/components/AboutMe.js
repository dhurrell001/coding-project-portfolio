import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles["about-container"]}>
      <h2>About Me</h2>
      <p>
        Hi, I’m Dave — a former plasterer of 30 years, now transitioning into a
        career in web and mobile development.
      </p>
      <p>
        After running my own business for over 15 years, I decided to take on a
        new challenge: tech. I’ve always had a strong interest in lifelong
        learning — and for the past few years, I’ve set myself the personal goal
        of achieving at least one new qualification each year, often just for
        the joy of learning something new.
      </p>
      <p>I’ve explored a variety of technologies including:</p>

      <ul>
        <li>JavaScript (entry-level certified)</li>
        <li>Python (entry-level certified)</li>
        <li>React (Web & Native)</li>
        <li>Express.js</li>
        <li>Django</li>
        <li>C# with WPF</li>
        <li>SQL (basic queries and schema understanding)</li>
      </ul>

      <p>
        One of my proudest achievements was getting a simple plaster calculator
        app published to the Apple App Store — a small but meaningful milestone
        in my journey from construction to code.
      </p>
      <p>
        I’m not an expert, and I don’t pretend to be — but I’m curious,
        committed, and not afraid to dive in and build things. This portfolio
        includes a selection of the projects I’ve worked on — some more polished
        than others — but all created with enthusiasm and a desire to improve.
      </p>
      <p>
        If you're looking for someone who brings practical problem-solving
        skills, a strong work ethic, and a love of learning to tech — I’d love
        to connect.
      </p>
    </section>
  );
}
