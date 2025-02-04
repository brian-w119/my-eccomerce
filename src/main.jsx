import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Basket from "./Basket";
import Contact from "./Contact";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Category from "./Category";
import Jewellry from "./selectCategory/Jewellry";
import Misc from "./selectCategory/Misc";
import Tshirts from "./selectCategory/Tshirts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/category",
    element: <Category />,
  },

  {
    path: "/category/jewellry",
    element: <Jewellry />,
  },
  {
    path: "/category/miscallaneous",
    element: <Misc />,
  },

  {
    path: "/category/tshirts",
    element: <Tshirts />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
