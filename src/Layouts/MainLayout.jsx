import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className=" fixed z-10 bg-black   text-white opacity-30 w-[1150px]">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
