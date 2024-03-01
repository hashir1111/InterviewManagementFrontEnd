import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import LoginForm from "../components/login-form";
import SignUpForm from "../components/signup-form";

const Login = () => {
  
  const [isLogin, setIsLogin] = useState(true);



  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
        <main className="flex items-center w-full px-2 md:px-20">
          <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
            <p className="text-6xl text-blue-500 font-bold">
              Welcome to The Secure Solutions
            </p>
            <p className="font-medium text-lg leading-1 text-pink-400 w-1/2 mx-32 mt-6">
              "Exciting opportunities at The Secure Solutions! We're hiring
              talented Front-end, Back-end, HR, Software Engineers, and SQA
              professionals. Join our dynamic team and contribute to
              cutting-edge projects that make a difference. Apply now and unlock
              your potential!"
            </p>
          </div>
          {isLogin ? <LoginForm setIsLogin={setIsLogin}  /> : <SignUpForm setIsLogin={setIsLogin} />}
        </main>
      </div>
    </div>
  );
};

export default Login;
