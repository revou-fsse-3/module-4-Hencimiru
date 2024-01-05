import { Outlet } from "react-router-dom";
import "../../App.css";
import { Toaster } from "react-hot-toast";
import "../Navbar/navbar"
import Navbar from "../Navbar/navbar";

const layout = () => {
  return (
    <div>
        <Navbar/>
        <Toaster/>
      <Outlet />
    </div>
  );
};

export default layout;
