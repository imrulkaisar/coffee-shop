import { createBrowserRouter } from "react-router-dom";
import MainTemplates from "../Layouts/MainTemplates";

const MainRouters = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplates />,
  },
]);

export default MainRouters;
