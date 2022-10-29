import React, { useState } from "react";
import TextInput from "../UIComponents/TextInput";
// import SignUp from "./SignUp";

const LoginForm = (props) => {
  const [formLoginData, setformLoginData] = useState({
    username: "",
    password: "",
  });

  const { setShowModal } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData((prevFormLoginData) => ({
      ...prevFormLoginData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="absolute inset-0 z-50 m-auto box-border flex select-none justify-center bg-gray-200 bg-opacity-70 ">
        <form className="m-auto flex flex-row justify-end">
          <button
            type="button"
            className=" absolute flex flex-row justify-end px-5 py-3 text-lg font-bold text-black"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
          <div className="max-w-md ">
            <img
              src="src/Images/SignUp.jpg"
              alt="SignUp image"
              className="h-full w-full bg-white bg-auto object-cover"
            />
          </div>
          <div className="m-auto flex flex-col rounded-md bg-white py-20 px-24 shadow-md ">
            <div className="relative m-auto flex flex-row items-center justify-center">
              <img src="src/Images/to-do-list.png" className="h-8 w-8" />
              <span className="pl-2 text-xl font-black uppercase">
                To-Do List
              </span>
            </div>
            <span className="flex justify-start p-6 text-3xl font-bold text-blue-500">
              SIGN IN
            </span>
            <TextInput
              autoComplete="off"
              type="text"
              label="Username"
              name="username"
              htmlFor="username"
              placeholder="Username"
              onChange={handleChange}
              value={formLoginData.username}
            />
            <TextInput
              type="password"
              label="Password"
              name="password"
              htmlFor="password"
              placeholder="Password"
              onChange={handleChange}
              value={formLoginData.password}
            />
            <button
              placeholder="Submit"
              name="submit"
              onClick={() => setShowModal(false)}
              className="block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
