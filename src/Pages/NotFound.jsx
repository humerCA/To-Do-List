import React from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../Images/404.png";

const NotFound = () => {
  return (
    <div className="relative inset-0 flex h-screen w-full flex-col bg-white dark:bg-[#18242b] dark:text-white md:w-auto">
      <span className="mt-10 ml-10 text-8xl font-black text-[#e6ac4a] md:ml-20 ">
        404
      </span>
      <span className="ml-10 mt-2 text-4xl font-normal md:ml-20">
        Page not found
      </span>
      <span className="mt-1 ml-10 text-xl font-normal md:ml-20">
        Please check the page if correct.
      </span>
      <Link
        to="/"
        className="z-50 mt-12 ml-10 w-36 rounded-full bg-[#c6453a] p-2 text-center font-bold md:ml-20"
      >
        Back
      </Link>
      <img
        className="absolute bottom-0 right-0 z-0 m-auto flex h-auto w-auto object-cover md:w-2/3"
        src={ErrorPage}
        alt=""
      />
    </div>
  );
};

export default NotFound;
