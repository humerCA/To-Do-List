import React, { useState, useContext } from "react";
import LoginForm from "./SigningOptions/LoginForm";
import SignUp from "./SigningOptions/SignUp";
import TodoListIcon from "../Images/to-do-list.png";
import UserIcon from "../Images/user-icon.png";
import { Link } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const Nav = () => {
  const { userData } = useContext(UserContext);
  const [showSignUp, setSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="relative z-30 flex h-16 select-none flex-row items-center justify-between bg-white p-3 shadow-md dark:bg-gray-800">
        <div className="ml-10 sm:ml-5 md:ml-20">
          <Link
            className="flex select-none flex-row items-center sm:px-5 md:px-0"
            to="/"
          >
            <img src={TodoListIcon} className="h-9" />
            <span className="ml-3 text-lg font-black uppercase dark:text-gray-50 sm:text-xl">
              To-Do List
            </span>
          </Link>
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="align mr-7 rounded px-1.5 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1 dark:hover:bg-gray-700 md:hidden"
        >
          <div className="flex h-10 flex-col justify-center gap-1">
            <span className="block h-1 w-7 rounded bg-black dark:bg-gray-50"></span>
            <span className="block h-1 w-7 rounded bg-black dark:bg-gray-50"></span>
            <span className="block h-1 w-7 rounded bg-black dark:bg-gray-50"></span>
          </div>
        </button>
        {!userData && (
          <div className="mr-10 hidden flex-col content-center items-end md:flex">
            <div className="flex flex-row items-center justify-between px-10 font-medium">
              <button
                className="flex flex-row items-center justify-between"
                onClick={() => setShowLogin(!showLogin)}
              >
                <img src={UserIcon} className="h-8" />
                <span className="p-4 dark:text-gray-50">Login</span>
              </button>
              <button
                className="relative ml-10 rounded bg-yellow-400 py-1 px-4 font-bold text-gray-800 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2"
                onClick={() => setSignUp(true)}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
        {userData && (
          <div className="mr-10 hidden flex-col content-center items-end md:flex">
            <div className="flex flex-row items-center justify-between px-10 font-medium">
              <button
                className="flex flex-row items-center justify-between"
                onClick={() => setShowLogin(!showLogin)}
              >
                <img src={UserIcon} className="h-8" />
                <span className="p-4 dark:text-gray-50">Username</span>
              </button>
              <Link
                className="flex select-none flex-row items-center sm:px-5 md:px-0"
                to="/"
              >
                <button
                  className="relative ml-10 rounded bg-yellow-400 py-1 px-4 font-bold text-gray-800 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2"
                  onClick={() => setSignUp(true)}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* show menu */}
      {showMenu && (
        <div
          className={`absolute z-50 w-full bg-gray-300 bg-opacity-80 p-2 py-4 transition-all duration-500 ease-in dark:bg-gray-500 dark:bg-opacity-90 ${
            showMenu && "top-16"
          } md:hidden`}
        >
          <div className="align-center flex flex-col items-center justify-center text-lg font-bold">
            <button
              className="flex flex-row items-center justify-between py-1 px-20 uppercase dark:text-white"
              onClick={() => setShowLogin(!showLogin)}
            >
              Login
            </button>
            <button
              className="mt-5 rounded-lg bg-yellow-400 py-1 px-20 font-bold uppercase text-gray-100 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2 dark:text-gray-800"
              onClick={() => setSignUp(true)}
            >
              Sign up
            </button>
          </div>
        </div>
      )}
      {showLogin && <LoginForm setShowLogin={setShowLogin} />}
      {showSignUp && <SignUp setSignUp={setSignUp} />}
    </>
  );
};

export default Nav;
