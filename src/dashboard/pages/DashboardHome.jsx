import StatsCard from "../components/StatsCard";
import { FaHotel, FaUsers, FaMoneyBill } from "react-icons/fa";
import BookingChart from "../charts/BookingChart";

const DashboardHome = () => {
  return (
    <div className="space-y-8">

      <h2 className="text-3xl font-bold">Dashboard Overview</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <StatsCard
          title="Total Hotels"
          value="24"
          icon={<FaHotel />}
        />

        <StatsCard
          title="Total Users"
          value="1200"
          icon={<FaUsers />}
        />

        <StatsCard
          title="Revenue"
          value="$12,400"
          icon={<FaMoneyBill />}
        />

      </div>

      <BookingChart />

    </div>
  );
};

export default DashboardHome;