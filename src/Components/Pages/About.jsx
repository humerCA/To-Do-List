import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const About = () => {
  return (
    <>
      <Nav />
      <div className="select-none">
        <div className="mt-10 flex justify-center text-2xl font-bold dark:text-white">
          About
        </div>
        <span className="mt-6 flex justify-center text-xl text-yellow-400">
          To-do List is designed by:
        </span>
        <span className="flex justify-center text-4xl text-red-500">
          ['TheCodeZelt']
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default About;
