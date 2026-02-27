import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaHome, FaUser, FaBook } from "react-icons/fa";

const DashboardSidebar = () => {
  const { user } = useAuth();

  return (
    <aside className="w-72 bg-base-100 p-6 shadow-xl hidden md:block">

      <h2 className="text-2xl font-bold mb-8 text-primary">
        Dashboard
      </h2>

      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-box hover:bg-base-200"
        >
          <FaHome /> Overview
        </NavLink>

        <NavLink
          to="/dashboard/bookings"
          className="flex items-center gap-3 p-3 rounded-box hover:bg-base-200"
        >
          <FaBook /> My Bookings
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className="flex items-center gap-3 p-3 rounded-box hover:bg-base-200"
        >
          <FaUser /> Profile
        </NavLink>

        <div className="mt-6 pt-6 border-t opacity-70">
          {user?.email}
        </div>

      </nav>

    </aside>
  );
};

export default DashboardSidebar;