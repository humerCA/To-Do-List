import React, { useState, useContext } from "react";
import LoginForm from "./SigningOptions/LoginForm";
import SignUp from "./SigningOptions/SignUp";
import TodoListIcon from "../Images/to-do-list.png";
import UserIcon from "../Images/user-icon.png";
import { Link } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import Light from "../Images/Light.png";
import Night from "../Images/Night.png";

const Nav = () => {
  const {
    userData,
    setUserData,
    darkMode,
    setDarkMode,
    showSignUp,
    setSignUp,
    showLogin,
    setShowLogin,
    showMenu,
    setShowMenu,
  } = useContext(UserContext);

  console.log(userData);

  const handleSwitch = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <nav className="relative z-30 flex h-16 select-none flex-row items-center justify-between bg-white p-3 shadow-md dark:bg-gray-800 dark:shadow-md">
        <div className="ml-10 justify-between sm:ml-5 md:ml-20">
          <Link
            className="flex select-none flex-row items-center sm:px-5 md:px-0"
            to={userData && "/"}
          >
            <img src={TodoListIcon} className="h-9" />
            <span className="ml-3 text-lg font-black uppercase dark:text-gray-50 sm:text-xl">
              To-Do List
            </span>
          </Link>
        </div>
        {/* Switch Button */}
        {/* <div className="align-center flex justify-around">
          <label
            htmlFor="darkMode"
            class="relative inline-flex cursor-pointer items-center"
          >
            <input
              onClick={handleSwitch}
              type="checkbox"
              value=""
              id="darkMode"
              class="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-gray-800"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div> */}
        <div className="flex flex-row justify-between ">
          <button
            className="mt-1 mr-5 max-h-8 rounded-full bg-gradient-to-tr from-neutral-300 to-neutral-200 p-2 text-xl text-white dark:bg-white dark:from-neutral-700 dark:to-neutral-400 md:hidden"
            onClick={handleSwitch}
          >
            <img src={darkMode === "light" ? Night : Light} className="h-4" />
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="mr-7 rounded px-1.5 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1 dark:hover:bg-gray-700 md:hidden"
          >
            <div className="flex h-10 flex-col justify-center gap-1">
              <span className="block h-1 w-7 rounded bg-black dark:bg-gray-50"></span>
              <span className="block h-1 w-7 rounded bg-black dark:bg-gray-50"></span>
              <span className="block h-1 w-7 rounded bg-black dark:bg-gray-50"></span>
            </div>
          </button>
        </div>
        {!userData && (
          <div className="mr-10 hidden flex-col content-center items-end md:flex">
            <div className="flex flex-row items-center justify-between px-10 font-medium">
              <button
                className="mr-10 justify-end rounded-full bg-gradient-to-tr from-neutral-300 to-neutral-200 p-2 text-xl text-white dark:bg-white dark:from-neutral-700 dark:to-neutral-400"
                onClick={handleSwitch}
              >
                <img
                  src={darkMode === "light" ? Night : Light}
                  className="h-4"
                />
              </button>
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
            <div className="flex flex-row items-center justify-around pr-10 font-medium">
              <button
                className="text-md flex justify-center rounded-full bg-gradient-to-tr from-neutral-100 to-neutral-300 px-4 py-1 align-middle text-gray-800 dark:bg-white dark:from-neutral-700 dark:to-neutral-400 dark:text-gray-100 md:p-2 lg:px-3"
                onClick={handleSwitch}
              >
                <img
                  src={darkMode === "light" ? Night : Light}
                  className="align-center m-auto h-4"
                />
                <span className="ml-2 hidden lg:flex">
                  {darkMode === "light" ? "Dark Mode" : "Light Mode"}
                </span>
              </button>

              <button className="ml-10 flex flex-row items-center justify-between">
                <img src={UserIcon} className="h-8" />
                <span className="p-4 dark:text-gray-50">
                  {userData.username}
                </span>
              </button>
              <Link
                className="flex select-none flex-row items-center sm:px-5 md:px-0"
                to="/"
              >
                <button
                  className="relative ml-5 rounded bg-yellow-400 py-1 px-4 font-bold text-gray-800 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2"
                  onClick={() => setUserData(null)}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {showMenu && (
        <>
          <div
            className={`absolute z-50 w-full bg-gray-300 bg-opacity-80 p-2 py-4 transition-all duration-500 ease-in dark:bg-gray-900 dark:bg-opacity-95 ${
              showMenu && "top-16"
            } md:hidden`}
          >
            {!userData && (
              <div className="align-center flex flex-col items-center justify-center text-lg font-bold">
                <button
                  className="flex flex-row items-center justify-between py-1 px-20 uppercase dark:text-white"
                  onClick={() => setShowLogin(!showLogin)}
                >
                  Login
                </button>
                <button
                  className="mt-5 rounded-lg bg-yellow-400 py-1 px-20 font-bold uppercase text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2 dark:text-gray-800"
                  onClick={() => setSignUp(true)}
                >
                  Sign up
                </button>
              </div>
            )}
            {userData && (
              <div className="flex flex-col items-center justify-center text-lg font-bold">
                <button className="m-auto flex items-center justify-center">
                  <span className="p-4 dark:text-gray-50">
                    {userData.username}
                  </span>
                </button>
                <Link
                  className="flex select-none items-center p-2 sm:px-5 md:px-0"
                  to="/"
                >
                  <button
                    className="rounded-lg bg-yellow-400 py-1 px-20 font-bold text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 focus:ring-offset-2 dark:bg-yellow-500 dark:text-gray-50 dark:hover:bg-yellow-400"
                    onClick={() => setUserData(null)}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </>
      )}
      {showLogin && <LoginForm setShowLogin={setShowLogin} />}
      {showSignUp && <SignUp setSignUp={setSignUp} />}
    </>
  );
};

export default Nav;
