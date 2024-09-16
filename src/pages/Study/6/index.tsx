import * as React from "react";
import {Link} from "react-router-dom";
import classes from "../index.module.css";
import iframe from "./iframe.html";

export const Study6: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Занятие 6</h1>
      <p className={classes.paragraph}>Практика</p>
      <iframe className={classes.iframe} srcDoc={iframe} />
      <div className={classes.nav}>
        <Link to="/study/5">{"<<<"}</Link>
        {/* <Link to="/study/7">{">>>"}</Link> */}
      </div>
    </div>
  );
};
