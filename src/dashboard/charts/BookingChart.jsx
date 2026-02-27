import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", bookings: 40 },
  { name: "Feb", bookings: 60 },
  { name: "Mar", bookings: 90 },
  { name: "Apr", bookings: 70 }
];

const BookingChart = () => {
  return (
    <div className="bg-base-100 p-6 rounded-box shadow-lg h-96">

      <h3 className="text-xl font-bold mb-6">
        Booking Growth
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="bookings"
            stroke="#0284c7"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default BookingChart;