import React from "react";

const Body = () => {
  return (
    <>
      <section className="relative z-0 flex h-full flex-1 flex-col bg-gray-100">
        <img
          src="src/Images/background.jpg"
          className="absolute h-full w-full bg-auto object-cover opacity-20"
        />
        <div className="relative flex h-full flex-col items-center justify-center p-20">
          <h1 className="text-5xl font-black text-gray-800 ">
            Welcome to To-Do List
          </h1>
          <button className="mt-10 rounded bg-blue-500 py-2 px-5 font-bold text-white hover:bg-blue-700">
            GET STARTED
          </button>
        </div>
      </section>
      <footer className="flex h-8 flex-col items-end justify-center bg-yellow-400 px-5 text-sm">
        All rights reserved
      </footer>
    </>
  );
};

export default Body;
