import React from "react";
import Nav from "../Components/Main/Nav";
import Body from "../Components/Main/Body";

const Home = () => {
  return (
    <>
      <div className="m-0 flex h-screen flex-col p-0">
        <Nav />
        <Body />
      </div>
    </>
  );
};

export default Home;
