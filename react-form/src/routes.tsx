import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./containers/Login/login";
import Register from "./containers/Register/register";
import Layout from "./components/Layout/layout";
import Category from "./containers/Category/listcategory";
import FormCategory from "./containers/Category/formcategory";
import CreateCategory from "./containers/Category/createcategory";
import Milestone4 from "./containers/Milestone4/"
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
        path: "category",
        element: <Category />,
      },
      {
        path: "formcategory",
        element: <FormCategory />,
      },
      {
        path: "createcategory",
        element: <CreateCategory />,
      },
      {
        path: "milestone4",
        element: <Milestone4 />,
      },
    ],
  },
]);

export default router;
