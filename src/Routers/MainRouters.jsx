import { createBrowserRouter } from "react-router-dom";
import MainTemplates from "../Layouts/MainTemplates";
import Home from "../Pages/Home";
import ProductDetails from "../Layouts/ProductDetails";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";

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
      {
        path: "/product/update/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
    ],
  },
]);

export default MainRouters;
