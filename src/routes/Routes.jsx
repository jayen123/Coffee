import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards/CoffeeCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../../public/categories.json"),
        children: [
            {
            path: "/",
            element: <CoffeeCards />,
            loader: () => fetch("../../public/coffees.json")
          },
          {
            path: "/category/:categoryId",
            element: <CoffeeCards />,
            loader: () => fetch("../../public/coffees.json")
          },
          
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export default routes;
