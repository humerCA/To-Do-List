import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Cards = () => {
  return (
    <>
      <div className="select-none">
        <figure className="relative flex  flex-col rounded-xl bg-gray-50 p-4 shadow-md dark:bg-gray-800 md:m-0 md:flex md:p-0 ">
          <div className="absolute top-0 left-0 h-full rounded-l-lg bg-yellow-400 p-3" />
          <div className="flex flex-wrap space-y-4 pt-4 pl-5 text-center text-gray-800 sm:text-left md:w-auto md:p-6 md:pl-12 md:text-center lg:text-left">
            <button
              type="button"
              className="absolute right-0 top-0 z-30 px-3 py-3 text-lg font-bold text-black dark:text-gray-50"
              onClick={() => setShowLogin(false)}
            >
              <IoIosCloseCircleOutline className="text-2xl font-semibold text-gray-400" />
            </button>
            <span className="w-full pt-1 text-center text-lg font-medium dark:text-gray-50  md:text-left ">
              “Sample To-do List Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sample To-do List Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.”
            </span>
            <figcaption className="w-full flex-wrap text-center font-semibold md:text-center lg:text-left">
              <div className="text-blue-500">Type</div>
              <div className="text-gray-500">To-do List "1"</div>
            </figcaption>
          </div>
          <div className="mt-5 ml-5 flex place-content-center md:mt-0 md:mr-6 md:place-content-end">
            <button className="z-10 mb-5 w-32 max-w-sm rounded-lg bg-blue-700 py-1 font-normal text-white shadow-md hover:bg-blue-800">
              Done
            </button>
          </div>
        </figure>
      </div>
    </>
  );
};

export default Cards;
