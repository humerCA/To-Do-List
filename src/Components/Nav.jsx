import React, { useState } from "react";
import LoginForm from "./SigningOptions/LoginForm";
import SignUp from "./SigningOptions/SignUp";

const Nav = () => {
  const [showSignUp, setSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="relative z-30 flex h-16 select-none flex-row items-center justify-between bg-white p-3 shadow-md">
        <div className="ml-10 flex flex-row items-center sm:px-10">
          <img src="src/Images/to-do-list.png" className="h-9" />
          <span className="ml-3 w-40 text-lg font-black uppercase sm:text-xl">
            To-Do List
          </span>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="align mr-7 rounded px-1.5 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-2 md:hidden"
        >
          <div className="flex h-10 flex-col justify-center gap-1">
            <span className="block h-1 w-7 rounded bg-black"></span>
            <span className="block h-1 w-7 rounded bg-black"></span>
            <span className="block h-1 w-7 rounded bg-black"></span>
          </div>
        </button>
        <div className="mr-10 hidden flex-col content-center items-end md:flex">
          <div className="flex flex-row items-center justify-between px-10 font-medium">
            <button
              className="flex flex-row items-center justify-between"
              onClick={() => setShowLogin(!showLogin)}
            >
              <img src="src/Images/user-icon.png" className="h-8" />
              <span className="p-4">Login</span>
            </button>
            <button
              className="relative ml-10 rounded bg-yellow-400 py-1 px-4 font-bold text-gray-800 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2"
              onClick={() => setSignUp(true)}
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div
          className={`absolute z-50 w-full border-2 bg-gray-300 p-2 py-4 transition-all duration-500 ease-in ${
            showMenu ? "top-16" : null
          } md:hidden`}
        >
          <div className="align-center flex flex-col items-center justify-center text-lg font-bold">
            <button
              className="flex flex-row items-center justify-between py-1 px-20 uppercase"
              onClick={() => setShowLogin(!showLogin)}
            >
              Login
            </button>
            <button
              className="mt-5 rounded-lg bg-yellow-400 py-1 px-20 font-bold uppercase text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2"
              onClick={() => setSignUp(true)}
            >
              Sign up
            </button>
          </div>
        </div>
      )}
      {showLogin ? <LoginForm setShowLogin={setShowLogin} /> : null}
      {showSignUp ? <SignUp setSignUp={setSignUp} /> : null}
    </>
  );
};

export default Nav;
