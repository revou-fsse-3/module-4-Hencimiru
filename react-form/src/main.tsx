import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Routes } from "react-router-dom";
import routes from "./routes.tsx";
import './App.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app">
    <RouterProvider router={routes} />
    </div>
  </React.StrictMode>
);
