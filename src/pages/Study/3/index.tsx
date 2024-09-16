import * as React from "react";
import classes from "../index.module.css";
import iframe from "./iframe.html";

export const Study3: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Занятие 3</h1>
      <p className={classes.paragraph}>CSS, стилизация текста</p>
      <iframe className={classes.iframe} srcDoc={iframe} />
    </div>
  );
};
