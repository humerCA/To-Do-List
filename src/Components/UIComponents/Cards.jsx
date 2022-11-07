import React from "react";

const Cards = () => {
  return (
    <>
      <div className="select-none">
        <figure className="relative rounded-xl bg-gray-50 p-4 shadow-md dark:bg-gray-800 md:m-0 md:flex md:p-0 ">
          <div className="absolute top-0 left-0 h-full rounded-l-lg bg-yellow-400 p-3" />
          <div className="flex flex-col flex-wrap space-y-4 pt-4 pl-5 text-center text-gray-800 md:w-auto md:p-6 md:pl-12 md:text-left">
            <span className="w-full text-lg font-medium dark:text-gray-50">
              “Sample To-do List Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sample To-do List Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.”
            </span>
            <figcaption className="rounded-full font-semibold">
              <div className="text-blue-500">Type</div>
              <div className="text-gray-500">To-do List "1{Number}"</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
};

export default Cards;
