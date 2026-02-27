import { useLoaderData, useNavigation } from "react-router-dom";
import Hero from "../components/Hero";
import HotelCard from "../components/HotelCard";
import HotelCardSkeleton from "../components/HotelCardSkeleton";

const Home = () => {
  const hotels = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <>
      <Hero />

      <section className="py-20">
        <h2 className="text-3xl font-bold text-base-content mb-10">
          Featured Luxury Stays
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <HotelCardSkeleton key={i} />
              ))
            : hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
        </div>
      </section>
    </>
  );
};

export default Home;