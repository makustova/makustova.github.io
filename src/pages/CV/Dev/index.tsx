import * as React from "react";
import classes from "./index.module.css";
import {ExperienceItem} from "./ExperienceItem";
import {Contacts} from "./Contacts";

const DATA = [
  {
    title: "Frontend developer",
    employerName: "YouHodler",
    website: "https://youhodler.com",
    term: "April 2022 – present",
    stack: ["React Native", "TypeScript", "MobX", "Node.js"],
    responsibilities: [
      "Developing and supporting the website and the mobile app.",
    ],
    achievements: [
      "Implemented SSO via Google and Apple on both web and native platforms, which lead to a significant increase in user registration;",
      "Configured dark theme for the app, which resulted in a better user experience;",
      "Completed a number of major refactoring tasks, which resulted in a significant improvement of developer experience.",
    ],
  },
  {
    title: "Frontend developer",
    employerName: "Avito",
    website: "https://www.avito.ru",
    term: "August 2020 – April 2022",
    stack: ["React", "Styled Components", "TypeScript", "Go"],
    responsibilities: [
      "Improving and supporting an advertisement system on a website, which had millions of users daily from all the CIS countries.",
    ],
    achievements: ["Created a web page constructor from scratch."],
  },
  {
    title: "Frontend developer",
    employerName: "Rubbles (SBDA Group)",
    website: "https://rubbles.ru/",
    term: "October 2019 – August 2020",
    stack: ["React", "Angular 2", "Styled Components", "TypeScript"],
    responsibilities: [
      "Improving and supporting a B2B analytics & content platform;",
      "Leading a team of three junior front end developers.",
    ],
    achievements: [
      "With a small team created an email constructor from scratch.",
    ],
  },
  {
    title: "QA engineer, Frontend developer",
    employerName: "Profi.ru",
    website: "https://profi.ru/",
    term: "September 2017 – June 2019",
    stack: ["React", "Redux", "Flow", "Node.JS", "GraphQL"],
    responsibilities: [
      "Improving and supporting a platform which had millions of unique users from all over the country.",
    ],
    achievements: [
      "As a QA engineer, set up a snapshot testing framework, which significantly improved product quality;",
      "As a developer, implemented multiple A/B tests, which showed raise in customer conversion.",
    ],
  },
  {
    title: "Intern",
    employerName: "Google Summer of Code",
    website: "https://summerofcode.withgoogle.com/",
    term: "May 2017 – September 2017",
    stack: ["Python", "Bash"],
    responsibilities: [
      "Creating a rule-based machine translation system for Norwegian and Faroese.",
    ],
  },
];

export const Dev: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.name}>
          <h1 className={classes.title}>Marina Kustova</h1>
          <h2 className={classes.subtitle}>FE dev</h2>
        </div>
        <Contacts />
      </div>

      <div className={classes.separator}></div>

      <h3 className={classes.thirdTitle}>Experience</h3>

      <div className={classes.experienceWrapper}>
        {DATA.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>

      <div className={classes.separator}></div>

      <h3 className={classes.thirdTitle}>Education</h3>

      <section>
        <h4 className={classes.fourthTitle}>
          Bachelor's degree in Computational Linguistics (cum laude)
        </h4>
        <p className={classes.term}>2013 – 2017</p>
        <p className={classes.stack}>NRU HSE, Moscow, Russia</p>
      </section>

      <div className={classes.separator}></div>

      <h3 className={classes.thirdTitle}>Skills and Competencies</h3>
      <p className={classes.stack}>
        Russian (native), English (advanced), French (elementary), Norwegian
        (elementary), Mandarin (elementary), Serbian (elementary).
      </p>
    </div>
  );
};
