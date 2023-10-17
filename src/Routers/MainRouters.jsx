import { createBrowserRouter } from "react-router-dom";
import MainTemplates from "../Layouts/MainTemplates";
import Home from "../Pages/Home";
import ProductDetails from "../Layouts/ProductDetails";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import { apiURL } from "../Contexts/GlobalContext";

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
        loader: ({ params }) => fetch(`${apiURL}/products/${params.id}`),
      },
      {
        path: "/product/update/:id",
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`${apiURL}/products/${params.id}`),
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
    ],
  },
]);

export default MainRouters;
