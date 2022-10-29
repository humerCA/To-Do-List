import React, { useState } from "react";
import Login from "../SigningOptions/LoginForm";
import TextInput from "../UIComponents/TextInput";

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
      <div className="absolute inset-0 z-50 m-0 box-border flex select-none justify-center bg-gray-200 bg-opacity-70 ">
        <form className="m-auto flex flex-row justify-end">
          <button
            type="button"
            className=" absolute flex flex-row justify-end px-5 py-3 text-lg font-bold text-black"
            onClick={() => setSignUp(false)}
          >
            X
          </button>
          <div className="max-w-md ">
            <img
              src="src/Images/SignUp.jpg"
              alt="SignUp image"
              className="hidden h-full w-full bg-white bg-auto object-cover md:flex md:object-cover"
            />
          </div>
          <div className="m-0 flex flex-col rounded-md bg-white px-20 py-10 shadow-md sm:px-20 md:px-14 ">
            <div className="relative m-auto flex flex-row items-center justify-center">
              <img src="src/Images/to-do-list.png" className="h-8 w-8" />
              <span className="pl-2 text-xl font-black uppercase">
                To-Do List
              </span>
            </div>
            <span className="flex justify-center p-4 text-3xl font-bold text-blue-500">
              SIGN UP
            </span>
            <TextInput
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
              type="password"
              label="Password"
              name="password"
              htmlFor="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />

            <TextInput
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              htmlFor="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />

            <TextInput
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
              placeholder="Submit"
              name="submit"
              onClick={() => setSignUp(false)}
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
