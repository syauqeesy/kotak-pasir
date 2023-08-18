import { createBrowserRouter } from "react-router-dom";

import Home from "./page/Home";
import Detail from "./page/article/Detail";
import Create from "./page/article/Create";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/article",
    children: [
      {
        path: "/article/:id",
        element: <Detail />,
      },
      {
        path: "/article/create",
        element: <Create />,
      },
    ],
  },
]);
