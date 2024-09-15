import * as React from "react";
import {Link} from "react-router-dom";

export const StudyHome: React.FC = () => {
  return (
    <div>
      <h1>Домашковое</h1>
      <ul>
        <li>
          <Link to="/study/1">1</Link>
          <br />
          <Link to="/study/2">2</Link>
        </li>
      </ul>
    </div>
  );
};
