import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="relative z-30 flex flex-row justify-between bg-white shadow-md">
        <div className="ml-10 flex flex-row items-center px-10">
          <img src="src/Images/to-do-list.png" className="h-9 " />
          <span className="p-4 text-xl font-black uppercase">To-Do List</span>
        </div>
        <div className="mr-10">
          <div className="flex flex-row items-center justify-between px-10 font-medium">
            <img src="src/Images/user-icon.png" className="h-8" />
            <span className="p-4">Welcome Guest</span>
            <button className="relative ml-10 rounded bg-yellow-400 py-1 px-4 font-bold text-gray-800 hover:bg-yellow-500">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
