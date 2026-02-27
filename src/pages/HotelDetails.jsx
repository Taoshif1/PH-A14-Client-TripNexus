import { useLoaderData } from "react-router-dom";

const HotelDetails = () => {
  const hotel = useLoaderData();

  const {
    name,
    location,
    price,
    discountPrice,
    rating,
    reviewsCount,
    amenities,
    description,
    image,
    gallery
  } = hotel;

  return (
    <section className="py-16 space-y-10">

      <div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="opacity-70">{location}</p>
        <div className="mt-2 flex items-center gap-4">
          <span className="badge badge-accent">
            ⭐ {rating} ({reviewsCount} reviews)
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="rounded-box overflow-hidden shadow-xl">
        <img src={image} alt={name} className="w-full h-[400px] object-cover" />
      </div>

      {/* Gallery */}
      <div className="grid md:grid-cols-3 gap-4">
        {gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Gallery"
            className="rounded-box h-40 w-full object-cover"
          />
        ))}
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold mb-4">About this property</h2>
        <p className="opacity-80 leading-relaxed">{description}</p>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Amenities</h2>
        <div className="flex flex-wrap gap-3">
          {amenities.map((item, i) => (
            <span key={i} className="badge badge-outline">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-base-200 p-8 rounded-box flex justify-between items-center">
        <div>
          <span className="line-through opacity-50 mr-3">
            ${price}
          </span>
          <span className="text-3xl font-bold text-primary">
            ${discountPrice}
          </span>
          <span className="opacity-70 ml-2">/night</span>
        </div>

        <button className="btn btn-primary rounded-btn">
          Reserve Now
        </button>
      </div>

    </section>
  );
};

export default HotelDetails;