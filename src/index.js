import * as React from "react";
import "./reset.css";
import {createRoot} from "react-dom/client";
import {createHashRouter, RouterProvider, Link, Outlet} from "react-router-dom";
import {Sincerity, Siren, StudyHome, Study1} from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="/siren">siren</Link>
        <br />
        <Link to="/sincerity">sincerity</Link>
        <br />
        <Link to="/">home</Link>
        <br />
        <Link to="/study">обучательновое</Link>
      </>
    ),
  },
  {
    path: "sincerity",
    element: <Sincerity />,
  },
  {
    path: "siren",
    element: <Siren />,
  },
  {
    path: "study",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <StudyHome />,
      },
      {
        path: "/study/1",
        element: <Study1 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
