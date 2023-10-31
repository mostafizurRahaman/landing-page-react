import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import MainLayout from "../layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
      ],
   },
]);

export default router;
