import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
const Cards = ({ data, onDone, isDone, onDelete }) => {
  return (
    <>
      <div className="flex w-full justify-center">
        <figure
          className={` relative flex h-full w-full max-w-md flex-col justify-around rounded-xl bg-slate-50 p-4 shadow-lg dark:bg-slate-700 dark:shadow-2xl dark:shadow-slate-900 md:m-0 md:flex md:p-0 ${
            data.isDone && "!bg-slate-300 dark:!bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-0 left-0 h-full rounded-l-lg ${
              data.urgency
            } p-3 ${data.isDone && "!bg-slate-900 line-through"}`}
          />
          <div
            className={`mt-2 flex flex-col space-y-2 pt-4 pl-5 text-center text-slate-800 sm:text-left md:w-auto md:p-6 md:pl-12 md:text-center lg:text-left ${
              data.isDone && "line-through decoration-black"
            }`}
          >
            <div className="absolute right-0 top-0 mt-1 flex gap-3 px-4 py-1">
              <button
                disabled={isDone === true}
                type="button"
                className="text-lg font-bold text-black"
                // onClick={() => setShowLogin(false)}
              >
                <BiEdit className="text-2xl font-semibold text-slate-400" />
              </button>
              <button
                type="button"
                className="text-lg font-bold text-black"
                // onClick={() => setShowLogin(false)}
              >
                <IoIosCloseCircleOutline
                  onClick={() => {
                    onDelete(data);
                  }}
                  className="text-2xl font-semibold text-slate-400"
                />
              </button>
            </div>

            <span
              className={`w-full flex-wrap break-words text-center text-lg font-medium dark:text-slate-50 md:text-left ${
                data.isDone && "!text-black"
              } `}
            >
              {data.content}
            </span>

            <figcaption className="w-full flex-wrap text-center font-semibold md:text-left lg:text-left ">
              <div
                className={`capitalize text-blue-600 dark:text-blue-400 ${
                  isDone && "!text-slate-900"
                }`}
              >
                Urgency: {data.urgency}
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                To-do List "{data.id}"
              </div>
            </figcaption>
          </div>
          <div className="mt-5 ml-5 flex place-content-center md:mt-0 md:mr-6 md:place-content-end">
            <button
              onClick={() => onDone(data)}
              className={`z-10 mb-4 w-32 max-w-sm select-none rounded-lg bg-blue-700 py-1 font-normal text-white shadow-md hover:bg-blue-800 ${
                data.isDone && "!bg-slate-800 text-white"
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
