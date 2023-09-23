import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const loc = useLocation();

  console.log(loc);

  useEffect(() => {
    console.log(loc.pathname);

    if (loc.pathname === "/") {
      document.title = `Phone-home`;
    } else {
      document.title = `Phone ${loc.pathname.replace("/", "-")}`;
    }

    if (loc.state) {
        document.title = ` ${loc.state}`;
    }
  }, [loc.pathname]);

  return (
    <div>
      <Navbar/>
      <div className="min-h-[60vh]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
