import * as React from "react";
import "./reset.css";
import {createRoot} from "react-dom/client";
import {createHashRouter, RouterProvider, Link, Outlet} from "react-router-dom";
import {StudyHome, Study1} from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="/study">обучательновое</Link>
      </>
    ),
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
