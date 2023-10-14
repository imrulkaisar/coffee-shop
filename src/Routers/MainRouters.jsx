import { createBrowserRouter } from "react-router-dom";
import MainTemplates from "../Layouts/MainTemplates";
import Home from "../Pages/Home";
import ProductDetails from "../Layouts/ProductDetails";

const MainRouters = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplates />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default MainRouters;
