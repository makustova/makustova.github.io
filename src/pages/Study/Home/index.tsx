import * as React from "react";
import {Link} from "react-router-dom";

export const StudyHome: React.FC = () => {
  return (
    <div>
      <h1>Занятия</h1>
      <br />
      <br />
      <ul>
        <li>
          <Link to="/study/1">1</Link>
          <br />
          <br />
          <Link to="/study/2">2</Link>
          <br />
          <br />
          <Link to="/study/3">3</Link>
          <br />
          <br />
          <Link to="/study/4">4</Link>
          <br />
          <br />
          <Link to="/study/5">5</Link>
          <br />
          <br />
          <Link to="/study/6">6</Link>
        </li>
      </ul>
    </div>
  );
};
