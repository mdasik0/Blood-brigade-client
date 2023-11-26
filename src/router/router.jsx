import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default router;
