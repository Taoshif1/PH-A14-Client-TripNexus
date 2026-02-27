import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-200">

      <DashboardSidebar />

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;