import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const { name, location, price, rating, image } = hotel;

  return (
    <div className="bg-base-100 rounded-box shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <figure>
        <img src={image} alt={name} className="h-56 w-full object-cover" />
      </figure>

      <div className="p-5 space-y-3">
        <h3 className="font-bold text-lg text-base-content">{name}</h3>

        <p className="text-sm opacity-70">{location}</p>

        <div className="flex justify-between items-center gap-2 flex-wrap">
          <span className="text-primary font-bold text-lg whitespace-nowrap">
            ${price}/night
          </span>

          <span className="badge badge-accent whitespace-nowrap">
            ⭐ {rating}
          </span>
        </div>

        <Link to={`/hotel/${hotel.id}`}>
          <button className="btn btn-primary btn-sm w-full rounded-btn mt-2">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
