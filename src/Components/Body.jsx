import React, { useState } from "react";
import SignUp from "./SigningOptions/SignUp";

const Body = () => {
  const [showSignUp, setSignUp] = useState(false);
  return (
    <>
      <section className="relative z-0 flex h-full  flex-1 select-none flex-col bg-gray-100">
        <img
          src="src/Images/background.jpg"
          className="absolute h-full w-full bg-auto object-cover opacity-20"
        />
        <div className="relative flex h-full flex-col items-center justify-center p-20 text-center">
          <h1 className="text-3xl font-black text-gray-800 sm:text-4xl md:text-5xl">
            Welcome to To-Do List
          </h1>
          <button
            className="mt-5 rounded bg-blue-500 py-2 px-5 font-bold text-white hover:bg-blue-700 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-opacity-80 focus:ring-offset-2 md:mt-6"
            onClick={() => setSignUp(true)}
          >
            GET STARTED
          </button>
        </div>
      </section>
      <footer className="flex h-6 select-none flex-col items-end justify-center bg-yellow-400 px-5 text-sm">
        All rights reserved
      </footer>
      {showSignUp ? <SignUp setSignUp={setSignUp} /> : null}
    </>
  );
};

export default Body;
