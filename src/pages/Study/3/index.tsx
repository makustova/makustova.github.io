import * as React from "react";
import {Link} from "react-router-dom";
import classes from "../index.module.css";
import iframe from "./iframe.html";

export const Study3: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Занятие 3</h1>
      <p className={classes.paragraph}>CSS, стилизация текста</p>
      <iframe className={classes.iframe} srcDoc={iframe} />
      <div className={classes.nav}>
        <Link to="/study/2">{"<<<"}</Link>
        <Link to="/study/4">{">>>"}</Link>
      </div>
    </div>
  );
};
