import React from "react";

const Cards = () => {
  return (
    <>
      <div className="select-none">
        <figure className="relative flex  flex-col rounded-xl bg-gray-50 p-4 shadow-md dark:bg-gray-800 md:m-0 md:flex md:p-0 ">
          <hr className="absolute top-0 left-0 h-full rounded-l-lg bg-yellow-400 p-3" />
          <div className="flex flex-wrap space-y-4 pt-4 pl-5 text-center text-gray-800 sm:text-left md:w-auto md:p-6 md:pl-12 md:text-center lg:text-left">
            <button
              type="button"
              className="absolute z-30 w-full px-5 py-3 text-lg font-bold text-black dark:text-gray-50"
              onClick={() => setShowLogin(false)}
            >
              X
            </button>
            <span className="w-full text-lg font-medium dark:text-gray-50 ">
              “Sample To-do List Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sample To-do List Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.”
            </span>
            <figcaption className="w-full flex-wrap text-center font-semibold sm:text-left md:text-center lg:text-left">
              <div className="text-blue-500">Type</div>
              <div className="text-gray-500">To-do List "1"</div>
            </figcaption>
          </div>
          <div className="mr-6 flex place-content-end">
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
