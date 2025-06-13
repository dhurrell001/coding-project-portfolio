import styles from "./experience.module.css";
export default function Experience() {
  return (
    <div className={styles["experience-container"]}>
      <h2>Experience</h2>
      <strong>DEH Plastering, Bristol</strong> (2004 - Present)
      <p>
        As owner and lead plasterer with DEH Plastering. I specialize in
        providing high-quality traditional lime finishes and bespoke modern
        finishes. My role covers all aspects of running the business, ensuring
        good customer relations, and managing my team.
      </p>
      <ul>
        <li>
          Business management- procuring and scheduling the workload,
          advertising and promotion, and financial management.
        </li>
        <li>
          Client relations- Meeting with the client and providing solutions to
          their needs. Ensuring good relationships that have led to frequent
          repeat business.
        </li>
        <li>
          Team Leadership- Led a small team of plasterers, creating a friendly,
          supportive, and productive work environment while providing a high
          standard of workmanship.
        </li>
        <li>
          Specialization: Developed expertise in traditional lime plastering,
          promoting environmentally sustainable methods that preserve the
          integrity of historic buildings.
        </li>
      </ul>
      <strong>McCormick Plastering. Bristol. 1993-2004</strong> (1993-2004)
      <p>
        Started with a comprehensive 4-year apprenticeship, which advanced into
        a supervisory role where I led a team of six plasterers. Gained
        experience working on prestigious projects, including Hampton Court and
        Windsor Royal Lodge, in collaboration with renowned ornamental
        plastering company, Hayles and Howe.{" "}
      </p>
      <ul>
        <li>
          Apprenticeship: Completed an apprenticeship program, mastering a wide
          range of plastering techniques and gaining a deep understanding of
          both traditional and modern plastering methods
        </li>
        <li>
          Team Supervision: Progressed to a supervisory role, overseeing a team
          of six plasterers, coordinating daily tasks, and ensuring all work met
          high-quality standards and project timelines.
        </li>
        <li>
          Client Communication: Regularly consulted with clients and contractors
          to ensure project specifications were met and results exceeded client
          expectations.
        </li>
      </ul>
    </div>
  );
}
