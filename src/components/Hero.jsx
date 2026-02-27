import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", // luxury resort
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop", // infinity pool
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop", // modern suite
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop", // beachfront villa
];

const words = ["Luxury", "Comfort", "Elegance", "Excellence"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  /* Background Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* Typewriter Effect */
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1),
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  /* Parallax Effect */

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-box h-[80vh]">
      {/* Background Images */}
      <div
        className="absolute inset-0 transition-transform duration-75"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Luxury Hotel"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-secondary/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-base-100">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Experience{" "}
          <span className="text-primary border-r-2 border-primary pr-1 animate-pulse">
            {text}
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-90">
          Discover handpicked premium hotels and unforgettable stays worldwide.
        </p>

        {/* Glass Search Card */}
        <div className="mt-12 backdrop-blur-xl bg-base-100/10 border border-base-100/20 shadow-2xl p-6 md:p-8 rounded-box grid md:grid-cols-4 gap-4 w-full max-w-5xl">
          <input
            type="text"
            placeholder="Destination"
            className="input input-bordered bg-base-100/80 text-base-content w-full"
          />

          <input
            type="date"
            className="input input-bordered bg-base-100/80 text-base-content w-full"
          />

          <input
            type="date"
            className="input input-bordered bg-base-100/80 text-base-content w-full"
          />

          <button className="btn btn-primary w-full hover:scale-105 transition duration-300">
            Search Hotels
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
