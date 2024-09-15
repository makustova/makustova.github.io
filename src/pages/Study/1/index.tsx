import * as React from "react";
import classes from "../index.module.css";
import iframe from "./iframe.html";

export const Study1: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Занятие 1</h1>
      <p className={classes.paragraph}>Вспоминаем теги h1, h2, h3, p</p>
      <iframe className={classes.iframe} srcDoc={iframe} />
    </div>
  );
};
