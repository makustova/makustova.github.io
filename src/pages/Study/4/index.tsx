import * as React from "react";
import {Link} from "react-router-dom";
import classes from "../index.module.css";
import iframe from "./iframe.html";

export const Study4: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Занятие 4</h1>
      <p className={classes.paragraph}>Работа с фоном и блоками</p>
      <iframe className={classes.iframe} srcDoc={iframe} />
      <div className={classes.nav}>
        <Link to="/study/3">{"<<<"}</Link>
        {/* <Link to="/study/5">{">>>"}</Link> */}
      </div>
    </div>
  );
};
