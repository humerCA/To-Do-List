import React, { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import TextInput from "../UIComponents/TextInput";
import { NavLink } from "react-router-dom";

const TodoForm = () => {
  const [done, setDone] = useState(true);
  const [todo, setTodo] = useState({
    content: null,
    urgency: "Urgent",
  });

  const handleChange = (e) => {
    setTodo((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (e) => {
    setTodo((prevValue) => ({
      ...prevValue,
      urgency: e,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative my-6 mx-10 flex h-auto flex-col items-start justify-around rounded-2xl bg-slate-50 py-10 px-10 shadow-lg dark:bg-slate-800 dark:text-slate-500 md:mx-20"
      >
        <div className="flex flex-wrap items-center justify-center gap-5">
          <p className="font-medium text-slate-800 dark:text-slate-50 sm:ml-2">
            Urgency:
          </p>
          <Listbox
            value={todo.urgency}
            onChange={handleSelectChange}
            className="relative z-10 w-36 sm:w-72"
          >
            <div className="relative z-10 mt-1 ">
              <Listbox.Button className="relative z-10 w-full cursor-default rounded-lg bg-slate-50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{todo.urgency}</span>

                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {Urgency.map((urgency, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-700"
                            : "text-slate-900"
                        }`
                      }
                      value={urgency}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {urgency}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="mt-5 flex w-full flex-wrap space-y-4 md:flex-row">
          <TextInput
            onChange={handleChange}
            className="flex h-full w-full grow"
            labelClass="h-full w-full "
            autoComplete="off"
            type="text"
            label="Input Todo Here"
            name="content"
            htmlFor="Todo"
            placeholder="Input Todo Here"
          />
          {/* <div className="flex w-full flex-row justify-end md:flex-none"> */}
          <button className="ml-1 h-9 w-24 rounded-lg border-yellow-400 bg-yellow-400 px-8 py-2 align-middle text-sm font-bold text-slate-800 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-200 dark:text-slate-900 ">
            Add
          </button>
          {/* </div> */}
        </div>
        {/* {loading && <p>Loading...</p>} */}
      </form>
    </>
  );
};

export default TodoForm;

const Urgency = ["Urgent", "Low", "Moderate", "High"];
