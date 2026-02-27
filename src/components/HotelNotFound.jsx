import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

const HotelNotFound = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-8xl font-extrabold text-primary drop-shadow-lg">
          {error?.status || 404}
        </h1>

        <p className="text-xl opacity-70">
          Oops… The luxury stay you’re looking for doesn’t exist.
        </p>

        <Link to="/">
          <button className="btn btn-primary btn-lg rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HotelNotFound;