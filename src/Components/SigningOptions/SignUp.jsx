import React, { useState } from "react";
import TextInput from "../UIComponents/TextInput";
import SignUpImage from "../../Images/SignUp.jpg";
import TodoListIcon from "../../Images/to-do-list.png";

const SignUp = (props) => {
  const [formData, setformData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const { setSignUp } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="absolute inset-0 z-50 m-0 box-border flex select-none justify-center bg-gray-800 bg-opacity-70 ">
        <form className="z-30 m-auto flex flex-row justify-end">
          <button
            type="button"
            className="absolute z-50 flex flex-row justify-end px-5 py-3 text-lg font-bold text-black dark:text-gray-50"
            onClick={() => setSignUp(false)}
          >
            X
          </button>
          <div className="sm:max-w-sm md:max-w-md">
            <img
              src={SignUpImage}
              alt="SignUp image"
              className="z-0 hidden h-full w-full rounded-md bg-white bg-auto object-cover p-2 dark:bg-gray-600 md:flex md:object-cover"
            />
          </div>
          <div className="z-20 m-0 flex flex-col rounded-md bg-white px-20 py-10 shadow-md dark:bg-gray-600 sm:px-20 md:px-14 ">
            <div className="relative m-auto flex flex-row items-center justify-center">
              <img src={TodoListIcon} className="h-8 w-8" />
              <span className="pl-2 text-xl font-black uppercase dark:text-gray-50">
                To-Do List
              </span>
            </div>
            <span className="flex justify-center p-4 text-3xl font-bold text-blue-500">
              SIGN UP
            </span>
            <TextInput
              required
              autoComplete="off"
              type="text"
              label="Username"
              name="username"
              htmlFor="username"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
            />
            <TextInput
              required
              type="password"
              label="Password"
              name="password"
              htmlFor="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />

            <TextInput
              required
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              htmlFor="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />

            <TextInput
              required
              autoComplete="off"
              type="email"
              label="Email"
              name="email"
              htmlFor="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />

            <button
              type="submit"
              placeholder="Submit"
              name="submit"
              className=" mt-5 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
