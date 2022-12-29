import React, { useState, useContext } from "react";
import TextInput from "../UIComponents/TextInput";
import SignUpImage from "../../Images/SignUp.jpg";
import TodoListIcon from "../../Images/to-do-list.png";
import { UserContext } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup.string().min(8).max(32).required(),
  email: yup.string().email().required(),
});

const SignUp = () => {
  const { showSignUp, setSignUp, loading, setLoading } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(watch("username"));

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <>
      <div className="absolute inset-0 z-50 m-0 box-border flex select-none justify-center bg-slate-800 bg-opacity-70 ">
        <div className="z-30 m-auto flex flex-row justify-end">
          <button
            type="button"
            className="absolute z-50 flex flex-row justify-end px-5 py-3 text-lg font-bold text-black dark:text-slate-50"
            onClick={() => setSignUp(!showSignUp)}
          >
            X
          </button>
          <div className="z-0 sm:max-w-sm md:max-w-md">
            <img
              src={SignUpImage}
              alt="SignUp image"
              className="z-0 ml-2 hidden h-full w-full rounded-md bg-white bg-auto object-cover p-2 dark:bg-slate-600 md:flex md:object-cover"
            />
          </div>
          <div className="z-30 m-0 flex flex-col rounded-lg bg-white px-20 py-10 shadow-sm dark:bg-slate-600 sm:px-20 md:px-14 ">
            <div className="relative m-auto flex flex-row items-center justify-center">
              <img src={TodoListIcon} className="h-8 w-8" />
              <span className="pl-2 text-xl font-black uppercase dark:text-slate-50">
                To-Do List
              </span>
            </div>
            <span className="flex justify-center p-4 text-3xl font-bold text-blue-500">
              SIGN UP
            </span>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="mb-8">
                <TextInput
                  {...register("username")}
                  autoComplete="off"
                  type="text"
                  label="Username"
                  htmlFor="username"
                  placeholder="Username"
                />
                <p className="-mt-2 ml-2 mb-5 text-xs text-red-500">
                  {errors.username?.message}
                </p>
              </div>
              <div className="mb-8">
                <TextInput
                  {...register("password")}
                  type="password"
                  label="Password"
                  htmlFor="password"
                  placeholder="Password"
                />
                <p className="-mt-2 ml-2 mb-5 text-xs text-red-500">
                  {errors.password?.message}
                </p>
              </div>
              <div className="mb-8">
                <TextInput
                  {...register("confirmPassword")}
                  type="password"
                  label="Confirm Password"
                  htmlFor="confirmPassword"
                  placeholder="Confirm Password"
                />
                <p className="-mt-2 ml-2 mb-5 text-xs text-red-500">
                  {errors.confirmPassword && "Passwords do not match!"}
                </p>
              </div>
              <div className="mb-8">
                <TextInput
                  {...register("email")}
                  autoComplete="off"
                  type="email"
                  label="Email"
                  htmlFor="email"
                  placeholder="Email"
                />
                <p className="-mt-2 ml-2 mb-5 text-xs text-red-500">
                  {errors.email?.message}
                </p>
              </div>
              <button
                disabled={
                  (errors.password ? true : false) ||
                  (errors.username ? true : false) ||
                  (errors.confirmPassword ? true : false) ||
                  (errors.email ? true : false) ||
                  watch("username") === undefined ||
                  watch("password") === undefined ||
                  watch("confirmPassword") === undefined ||
                  watch("email") === undefined ||
                  watch("username") === "" ||
                  watch("password") === "" ||
                  watch("confirmPassword") === "" ||
                  watch("email") === ""
                }
                type="submit"
                placeholder="Submit"
                name="submit"
                className=" mt-10 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:pointer-events-none disabled:bg-slate-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
