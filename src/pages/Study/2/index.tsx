import * as React from "react";
import classes from "../index.module.css";
import iframe from "./iframe.html";

export const Study2: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Занятие 2</h1>
      <p className={classes.paragraph}>
        <strong>strong</strong>, <em>em</em>, <a href="#">ссылка</a>,{" "}
        <code>code</code>, маркированный и нумерованный список
      </p>
      <iframe className={classes.iframe} srcDoc={iframe} />
    </div>
  );
};
