import * as React from "react";
import classes from "./index.module.css";
import tg from "./svg/tg.svg";
import lin from "./svg/in.svg";
import gh from "./svg/gh.svg";

export const Contacts: React.FC = () => {
  return (
    <div className={classes.contactsWrapper}>
      <a
        className={classes.contact}
        target="_blank"
        href="https://t.me/maro00oo0o"
      >
        <img src={tg}></img>
      </a>
      <a
        className={classes.contact}
        target="_blank"
        href="https://www.linkedin.com/in/marina-kustova-982592159/"
      >
        <img src={lin}></img>
      </a>
      <a
        className={classes.contact}
        target="_blank"
        href="https://github.com/makustova"
      >
        <img src={gh}></img>
      </a>
    </div>
  );
};
