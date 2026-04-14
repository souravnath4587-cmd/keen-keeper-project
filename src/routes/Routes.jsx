import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/Home";
import Timeline from "../components/pages/Timeline";
import Stars from "../components/pages/Stars";
import ErrorPage from "../components/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stars",
        Component: Stars,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
