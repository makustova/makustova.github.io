import * as React from "react";
import "./reset.css";
import "./globals.css";
import {createRoot} from "react-dom/client";
import {createHashRouter, RouterProvider, Outlet} from "react-router-dom";
import {StudyHome, Study1, Study2, Study3, Dev, Cat, Mus} from "./pages";
import {animateBackground} from "./animation";

animateBackground();

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/cv",
        element: <Dev />,
      },
      // {
      //   path: "/cat",
      //   element: <Cat />,
      // },
      // {
      //   path: "/mus",
      //   element: <Mus />,
      // },
    ],
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
      {
        path: "/study/2",
        element: <Study2 />,
      },
      {
        path: "/study/3",
        element: <Study3 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
