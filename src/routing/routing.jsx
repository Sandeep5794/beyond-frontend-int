import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Homepage from "../views/home/Index";
import About from "../views/about/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default Router