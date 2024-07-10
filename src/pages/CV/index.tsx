import * as React from "react";
import {Link} from "react-router-dom";
import classes from "./index.module.css";

export {Cat} from "./Cat";
export {Dev} from "./Dev";
export {Mus} from "./Mus";

export const CV: React.FC = () => {
  document.body.style.backgroundColor = "#bfa9cc";

  return (
    <div className={classes.wrapper}>
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
  );
};
