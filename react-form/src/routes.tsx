import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Login from "./containers/Login/login";
import Register from "./containers/Register/register";
import Layout from "./components/Layout/layout";
import Add from "./containers/Category/Add/addcategory";
import Milestone4 from "./containers/Milestone4/";
import Edit from "./containers/Category/Edit/editcategory";
import List from "./containers/Category/List/listcategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "editcategory",
        element: <Edit />,
      },
      {
        path: "addcategory",
        element: <Add />,
      },
      {
        path: "listcategory",
        element: <List />,
      },
      {
        path: "milestone4",
        element: <Milestone4 />,
      },
    ],
  },
]);

export default router;
