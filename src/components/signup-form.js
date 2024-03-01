import React, { useState } from "react";
import axios from "axios";

const SignUpForm = ({ setIsLogin }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [error, setError] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      !registerEmail ||
      !registerPassword ||
      !registerName ||
      !registerConfirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (registerPassword !== registerConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Make a POST request to the signup endpoint with registerEmail, registerPassword, and registerName
      const response = await axios.post(
        "http://localhost:5000/api/v1/users",
        {
          email: registerEmail,
          password: registerPassword,
          username: registerName,
          role_id : 3
        }
      );

      // Assuming the API returns a success message or any relevant response
      const { message } = response.data;

      // Display a success message, show a notification, etc.
      localStorage.setItem("user", JSON.stringify({ registerName, registerEmail }));
      // Redirect to the apply page
      window.location.href = "/apply";
    } catch (error) {
      console.log("error !");
    }
  };
  return (
    <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
      <h2 className="p-3 text-3xl font-bold text-white">
        The Secure Solutions
      </h2>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <h3 className="text-xl font-semibold text-white pt-2">Create Account!</h3>

      {/* Inputs */}
      <div className="flex flex-col items-center text-black justify-center mt-2">
        <input
          type="text"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Name"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        />
        <input
          type="email"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <input
          type="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Confirm Password"
          value={registerConfirmPassword}
          onChange={(e) => setRegisterConfirmPassword(e.target.value)}

        ></input>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <p className="text-white mt-4 text-sm">Already have an account?</p>
      <p
        className="text-white mb-4 text-sm font-medium cursor-pointer"
        onClick={() => setIsLogin(true)}
      >
        Sign In to your Account?
      </p>
    </div>
  );
};

export default SignUpForm;
