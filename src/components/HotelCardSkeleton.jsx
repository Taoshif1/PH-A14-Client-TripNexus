const HotelCardSkeleton = () => {
  return (
    <div className="bg-base-100 rounded-box shadow-lg p-4 animate-pulse space-y-4">
      <div className="h-56 bg-base-300 rounded-box"></div>
      <div className="h-6 bg-base-300 rounded w-3/4"></div>
      <div className="h-4 bg-base-300 rounded w-1/2"></div>
      <div className="h-6 bg-base-300 rounded w-full"></div>
    </div>
  );
};

export default HotelCardSkeleton;