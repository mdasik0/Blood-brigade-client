import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";
import HomePage from "../components/pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
    ]
  },
]);

export default router;
