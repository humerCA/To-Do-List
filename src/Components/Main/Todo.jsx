import React from "react";
// import useAxiosFetch from "../../Hooks/useAxiosFetch";

//Components
import Nav from "./Nav";
import Cards from "../UIComponents/Cards";
import TextInput from "../UIComponents/TextInput";
import SearchBar from "../UIComponents/SearchBar";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");

  // const cards = data.map();
  // const [user, error, loading] = useAxiosFetch({
  //   axiosInstance: axios,
  //   method: "GET",
  //   url: "/",
  //   requestConfig: {
  //     headers: {},
  //   },
  // });

  const addTodo = (todo) => {};

  return (
    <>
      <div className="h-full bg-gray-100 bg-auto dark:bg-gray-700 xl:h-screen">
        <div className="h-screen dark:bg-gray-700">
          <Nav />
          <div className="mt-5">
            <SearchBar />
          </div>
          <div className="my-8 flex h-auto w-full grow items-center justify-around px-10 text-gray-50">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Urgency
              <svg
                className="ml-2 h-4 w-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>

            <TextInput
              className="flex h-full w-full grow"
              labelClass="h-full w-full "
              autoComplete="off"
              type="text"
              label="Input Todo Here"
              name="Todo"
              htmlFor="Todo"
              placeholder="Input Todo Here"
            />
            <button className="ml-1 rounded-lg border-yellow-400 bg-yellow-400 p-3 px-8 py-2.5 text-sm font-bold text-gray-800 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-200 dark:text-gray-900 ">
              Add
            </button>
          </div>
          {/* {loading && <p>Loading...</p>} */}

          <div className="grid gap-10 px-10 pb-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
