import * as React from "react";
import classes from "./index.module.css";

type ExperienceItemProps = {
  title: string;
  employerName: string;
  website: string;
  term: string;
  stack: string[];
  responsibilities: string[];
  achievements?: string[];
};

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  employerName,
  website,
  term,
  stack,
  responsibilities,
  achievements,
}) => {
  return (
    <section>
      <div className={classes.experienceTitle}>
        <h4 className={classes.fourthTitle}>
          {title} @{" "}
          <a href={website} target="_blank">
            {employerName}
          </a>
        </h4>
        <p className={classes.term}>{term}</p>
      </div>
      <div className={classes.experienceStack}>
        {stack.map((item, index) => (
          <span key={index} className={classes.stackItem}>
            {item}
          </span>
        ))}
      </div>
      <div className={classes.experienceInfo}>
        <p className={classes.experienceSubtitle}>Responsibilities:</p>
        <ul className={classes.experienceList}>
          {responsibilities.map((item, index) => (
            <li key={index} className={classes.experienceListItem}>
              {item}
            </li>
          ))}
        </ul>
        {Boolean(achievements) && (
          <>
            <p className={classes.experienceSubtitle}>Achievements:</p>
            <ul className={classes.experienceList}>
              {achievements!.map((item, index) => (
                <li key={index} className={classes.experienceListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};
