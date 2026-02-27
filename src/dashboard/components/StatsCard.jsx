const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-base-100 p-6 rounded-box shadow-lg flex justify-between items-center">

      <div>
        <h3 className="opacity-70">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>

      <div className="text-primary text-3xl">
        {icon}
      </div>

    </div>
  );
};

export default StatsCard;