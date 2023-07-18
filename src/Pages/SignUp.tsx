import React from "react";
import { signwithGoogle } from "../lib/Firebase";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../Features/userSlice";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        login({
          name: user.displayName,
          id: user.uid,
          photo: user.photoURL,
          username: user.email,
        })
      );
      console.log(user);
    }
  });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <img src="./../logo.png" alt="" className="w-[100px]" />
        <h1 className="text-2xl font-semibold">Create Your Account</h1>
      </div>
      <div className="mt-7">
        <Link to="/home">
          <button
            className="flex items-center justify-center gap-3 px-24 py-1 border-sky-400 border-2 rounded-md"
            onClick={() => signwithGoogle()}
          >
            <img src="./../google-logo.png" alt="" className="w-6 h-6" />
            Sign With Google
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
