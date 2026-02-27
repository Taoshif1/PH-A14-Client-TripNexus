import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalLoader from "../components/GlobalLoader";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <GlobalLoader></GlobalLoader>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
