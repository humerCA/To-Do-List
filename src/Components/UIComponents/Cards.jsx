import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Cards = ({ data, onDone, isDone }) => {
  return (
    <>
      <div className="select-none">
        <figure
          className={`relative flex flex-col rounded-xl bg-slate-100 p-4 shadow-md dark:bg-slate-800 md:m-0 md:flex md:p-0 ${
            data.isDone && "!bg-slate-300 dark:!bg-slate-600 "
          }`}
        >
          <div
            className={`absolute top-0 left-0 h-full rounded-l-lg ${
              data.urgency
            } p-3 ${
              data.isDone && "!bg-slate-800 line-through dark:!bg-slate-500"
            }`}
          />
          <div
            className={`flex flex-wrap space-y-4 pt-4 pl-5 text-center text-slate-800 sm:text-left md:w-auto md:p-6 md:pl-12 md:text-center lg:text-left ${
              data.isDone && "line-through"
            }`}
          >
            <button
              type="button"
              className="absolute right-0 top-0 z-30 px-3 py-3 text-lg font-bold text-black dark:text-slate-50"
              // onClick={() => setShowLogin(false)}
            >
              <IoIosCloseCircleOutline className="text-2xl font-semibold text-slate-400" />
            </button>

            <span className="w-full pt-1 text-center text-lg font-medium dark:text-slate-50 md:text-left ">
              {data.content}
            </span>

            <figcaption className="w-full flex-wrap text-center font-semibold md:text-center lg:text-left">
              <div className="capitalize text-blue-500">
                Urgency: {data.urgency}
              </div>
              <div className="text-slate-500">To-do List "{data.id}"</div>
            </figcaption>
          </div>
          <div className="mt-5 ml-5 flex place-content-center md:mt-0 md:mr-6 md:place-content-end">
            <button
              onClick={() => onDone(data)}
              className={`z-10 mb-5 w-32 max-w-sm rounded-lg bg-blue-700 py-1 font-normal text-white shadow-md hover:bg-blue-800 ${
                data.isDone &&
                "!bg-slate-800 text-white dark:!bg-slate-500 dark:text-black"
              }`}
            >
              {data.isDone ? "Undo" : "Done"}
            </button>
          </div>
        </figure>
      </div>
    </>
  );
};

export default Cards;
