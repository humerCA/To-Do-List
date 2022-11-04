import React from "react";
import Nav from "../Nav";
import Cards from "../UIComponents/Cards";
import TextInput from "../UIComponents/TextInput";
import SearchBar from "../UIComponents/SearchBar";

const Todo = () => {
  return (
    <>
      <div className="inset-0 h-full bg-gray-100 bg-auto dark:bg-gray-700">
        <div className="h-full dark:bg-gray-700">
          <Nav />
          <div className="my-5">
            <SearchBar />
          </div>
          <div className="px-12 pb-2 pt-4 text-gray-50">
            <TextInput
              autoComplete="off"
              type="text"
              label="Input Todo Here"
              name="Todo"
              htmlFor="Todo"
              placeholder="Input Todo Here"
              // onChange={handleChange}
              // value={formLoginData.username}
            />
          </div>
          <div className="my-2 grid grid-flow-row items-center gap-5 px-10 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
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
