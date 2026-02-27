import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Explore from "../components/Explore";
import About from "../pages/About";
import Blog from "../components/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HotelDetails from "../pages/HotelDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/hotels.json");
          return res.json();
        },
      },
      {
        path: "explore",
        element: <Explore></Explore>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "hotel/:id",
        element: <HotelDetails></HotelDetails>,
        loader: async ({ params }) => {
          const res = await fetch("/hotels.json");
          const hotels = await res.json();
          return hotels.find((hotel) => hotel.id === params.id);
        },
      },
    ],
  },
]);

export default router;
