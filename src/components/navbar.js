import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
    
  }, []);

  console.log(user);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            The Secure Solutions
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {user ? (
            <div className="flex flex-row space-x-4">
              <div className="z-50 w-52 h-18 text-center py-3 my-4 bg-blue-200 rounded-lg shadow">
                <div className="text-lg font-bold">{user.username || user.registerName}</div>
                <div className="text-sm text-gray-500">{user.email || user.registerEmail}</div>
              </div>
              <button
                className="z-50 w-40 h-12 text-center py-3 my-4 bg-blue-200 hover:bg-blue-500 rounded-lg shadow"
                
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <div
                className="z-50 w-40 h-12 text-center py-3 my-4 bg-blue-200 hover:bg-blue-500 rounded-lg shadow"
                id="user-dropdown"
              >
                Login/Signup
              </div>
            </Link>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/apply"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Apply for Job
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
