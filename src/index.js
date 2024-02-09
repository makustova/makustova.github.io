import * as React from "react";
import {createRoot} from "react-dom/client";
import {createHashRouter, RouterProvider, Link} from "react-router-dom";
import {Sincerity, Siren} from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="/siren">Siren</Link>
        <br />
        <Link to="/sincerity">Sincerity</Link>
        <br />
        <Link to="/">home</Link>
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
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
