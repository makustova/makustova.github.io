import * as React from "react";
import {Link} from "react-router-dom";
import classes from "./index.module.css";

export {Cat} from "./Cat";
export {Dev} from "./Dev";
export {Mus} from "./Mus";

export const CV: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.textBlock}>
        <h3 className={classes.subtitle}>Hello, my name is</h3>
        <h1 className={classes.title}>Marina</h1>
      </div>

      <div className={classes.icons}>
        <Link to="/mus" className={classes.link}>
          🎶
        </Link>
        <Link to="/dev" className={classes.link}>
          👩‍💻
        </Link>
        <Link to="/cat" className={classes.link}>
          🐈‍⬛
        </Link>
      </div>

      <div className={classes.textBlock}>I make stuff.</div>
    </div>
  );
};
