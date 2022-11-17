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
            <button className="ml-1 mb-3 rounded-lg border-yellow-400 bg-yellow-400 p-3 px-8 text-sm font-bold text-gray-800 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-200 dark:text-gray-50 ">
              Add
            </button>
          </div>
          {/* {loading && <p>Loading...</p>} */}

          <div className="grid gap-10 px-10 pb-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
