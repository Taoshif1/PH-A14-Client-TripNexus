import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

import { auth, db } from "./firebase.config";
import { doc, setDoc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

/* Register User */
export const registerUser = async (email, password) => {
  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(doc(db, "users", result.user.uid), {
    email,
    role: "user",
    createdAt: new Date()
  });

  return result;
};

/* Login User */
export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

/* Google Login */
export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  await setDoc(doc(db, "users", result.user.uid), {
    email: result.user.email,
    role: "user",
    provider: "google"
  }, { merge: true });

  return result;
};

/* Logout */
export const logoutUser = () => signOut(auth);