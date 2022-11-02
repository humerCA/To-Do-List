import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const About = () => {
  return (
    <>
      <Nav />
      <div>About</div>;
      <Outlet />
    </>
  );
};

export default About;
