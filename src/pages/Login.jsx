import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Fix for COOP error: Handle the Redirect result when page loads
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) navigate("/");
      })
      .catch((err) => console.error(err));
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Using Redirect instead of Popup
      await signInWithRedirect(auth, provider);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 backdrop-blur-xl bg-base-100/80 p-8 rounded-box shadow-2xl space-y-4 border border-base-300"
      >
        <h2 className="text-3xl font-bold text-primary text-center">
          Welcome Back 👋
        </h2>

        {/* Text-base-content ensures text is visible in dark mode */}
        <div className="form-control w-full text-base-content">
          <input
            {...register("email", { required: "Email required" })}
            placeholder="Email"
            className="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/50"
          />
        </div>

        <div className="form-control w-full text-base-content">
          <input
            type="password"
            {...register("password", { required: "Password required" })}
            placeholder="Password"
            className="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/50"
          />
        </div>

        <button
          disabled={isSubmitting}
          className="btn btn-primary w-full text-white"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2 hover:text-base-100 "
        >
          <FaGoogle className="text-accent" /> Login with Google
        </button>

        <p className="text-center text-sm text-base-content/70 mt-2">
          New traveler?{" "}
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
