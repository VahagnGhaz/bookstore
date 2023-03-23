import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from "./view/HomeView";
import Profile from "./routes/Profile";
import ErrorPage from "./view/ErrorPage";

const BasicRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeView/>,
    errorElement: <ErrorPage />,
    children: [
        {
          path: "profile",
          element: <Profile />,
        },
      ],
  },

]);

export default BasicRouter;