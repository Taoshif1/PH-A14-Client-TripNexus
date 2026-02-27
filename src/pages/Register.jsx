import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase.config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  /* Fix for COOP error: Handle the Redirect result when page loads */
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const userRef = doc(db, "users", result.user.uid);
          const docSnap = await getDoc(userRef);

          // Only create doc if it doesn't exist to avoid overwriting data
          if (!docSnap.exists()) {
            await setDoc(userRef, {
              email: result.user.email,
              name: result.user.displayName,
              role: "user",
              provider: "google",
              createdAt: new Date(),
            });
          }
          navigate("/");
        }
      } catch (err) {
        console.error("Redirect Error:", err.message);
      }
    };
    handleRedirect();
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await setDoc(doc(db, "users", result.user.uid), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        role: "user",
        createdAt: new Date(),
      });

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  /* Fixed Google Login using Redirect */
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Using Redirect instead of Popup to fix Cross-Origin policy issues
      await signInWithRedirect(auth, provider);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 backdrop-blur-xl bg-base-100/80 p-8 rounded-box shadow-2xl space-y-4 border border-base-300"
      >
        <h2 className="text-3xl font-bold text-center text-primary">
          Create Account ✨
        </h2>

        {/* Name */}
        <input
          {...register("name", { required: "Name required" })}
          placeholder="Full Name"
          className="input input-bordered w-full"
        />
        {errors.name && (
          <p className="text-error text-sm">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          {...register("email", { required: "Email required" })}
          placeholder="Email"
          className="input input-bordered w-full"
        />

        {/* Phone */}
        <input
          {...register("phone", { required: "Phone required" })}
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />

        {/* Country */}
        <select
          {...register("country")}
          className="select select-bordered w-full"
        >
          <option>Bangladesh</option>
          <option>USA</option>
          <option>UK</option>
          <option>Japan</option>
        </select>

        {/* Password */}
        <input
          type="password"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
          placeholder="Password"
          className="input input-bordered w-full"
        />

        {/* Confirm Password */}
        <input
          type="password"
          {...register("confirmPassword", {
            validate: (value) => value === password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          className="input input-bordered w-full"
        />
        {errors.confirmPassword && (
          <p className="text-error text-sm">{errors.confirmPassword.message}</p>
        )}

        <button
          disabled={isSubmitting}
          className="btn btn-primary w-full text-white"
        >
          {isSubmitting ? "Creating Account..." : "Register"}
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2 hover:text-base-100"
        >
          <FaGoogle className="text-accent" /> Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
