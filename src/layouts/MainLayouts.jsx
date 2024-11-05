import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayouts() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
