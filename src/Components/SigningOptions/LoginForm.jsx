import React, { useRef, useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";

//Images
import TextInput from "../UIComponents/TextInput";
import LoginImage from "../../Images/Login.png";

//Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//API
import fetchData from "../../Hooks/useAxiosUsers";
import { usersAPI } from "../../api/Users";
import { useJwt } from "react-jwt";

//JWT
import jwtDecode from "jwt-decode";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const { setShowLogin, loading, setLoading, setShowMenu } =
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
  console.log(watch("username"));

  const Login = useNavigate();

  // const onSubmitHandler = async (data) => {
  //   console.log({ data });
  //   // await users.post("/login", data);
  //   try {
  //     // setLoading(true);
  //     const result = await usersAPI.post("/login", data);
  //     console.log(result.data);
  //     localStorage.setItem("token", result.data.data.token);
  //     localStorage.setItem("username", result.data.data.user.username);
  //     Login("/main");
  //     setShowLogin(false);
  //   } catch (err) {
  //     console.log(err.message);
  //     setError(err.message);
  //   } finally {
  //     // setLoading(false);
  //   }
  //   reset();
  // };

  const onSubmitHandler = async (data) => {
    setLoading(true);
    try {
      const result = await usersAPI.post("/login", data);
      const token = jwtDecode(result.data.token);
      console.log(token);
      // console.log(result);

      localStorage.setItem("username", token.first_name);
      Login("/main");
      setShowLogin(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }

    reset();
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="absolute inset-0 z-50 m-auto box-border flex select-none justify-center bg-gray-800 bg-opacity-70 ">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="relative m-auto flex flex-row justify-end"
        >
          <button
            type="button"
            className="absolute z-30 flex flex-row justify-end px-5 py-3 text-lg font-bold text-black dark:text-gray-50"
            onClick={() => {
              setShowLogin(false);
            }}
          >
            X
          </button>
          <div className="m-0 hidden max-w-md shadow md:flex">
            <svg
              className="absolute left-2 z-10 max-w-md	object-cover p-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffd700"
                d="M0,224L40,229.3C80,235,160,245,240,224C320,203,400,149,480,117.3C560,85,640,75,720,85.3C800,96,880,128,960,144C1040,160,1120,160,1200,144C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
            </svg>
            <img
              src={LoginImage}
              alt="SignUp image"
              className="relative -right-2 hidden h-full w-full rounded-lg bg-white bg-auto shadow-sm dark:bg-gray-600 md:flex md:object-contain md:px-14"
            />
            <svg
              className="absolute left-2 bottom-0 z-10 max-w-md object-contain p-1 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#0099ff"
                d="M0,64L40,74.7C80,85,160,107,240,138.7C320,171,400,213,480,202.7C560,192,640,128,720,112C800,96,880,128,960,160C1040,192,1120,224,1200,202.7C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="z-20 m-auto flex flex-col rounded-md bg-white py-20 px-20 shadow-md dark:bg-gray-600 sm:px-24 md:px-16">
            <div className="relative m-auto flex flex-row items-center justify-center"></div>
            <span className="mt-0 flex justify-center px-6 text-xl font-bold text-black dark:text-gray-50">
              Welcome Back!
            </span>
            <span className="flex justify-center p-6 text-3xl font-bold text-blue-500">
              LOG IN
            </span>
            <div className="mb-5">
              <TextInput
                {...register("username")}
                autoComplete="off"
                type="text"
                label="Username"
                htmlFor="username"
                placeholder="Username"
              />
              <p className="-mt-2 ml-2 text-xs text-red-500">
                {errors.username?.message}
              </p>
            </div>
            <div>
              <TextInput
                {...register("password")}
                autoComplete="off"
                type="password"
                label="Password"
                htmlFor="password"
                placeholder="Password"
              />
              <p className="-mt-2 ml-2 mb-2 text-xs text-red-500 ">
                {errors.password?.message}
              </p>
            </div>
            {!loading && (
              <button
                disabled={
                  (errors.password ? true : false) ||
                  (errors.username ? true : false) ||
                  watch("username") === undefined ||
                  watch("password") === undefined ||
                  watch("username") === "" ||
                  watch("password") === ""
                }
                type="submit"
                placeholder="Submit"
                name="submit"
                className="mt-5 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-500"
              >
                Login
              </button>
            )}

            {loading && (
              <button
                disabled
                type="button"
                className="text-whit mr-2 mt-5 inline-flex w-full items-center rounded-lg border bg-rose-500 py-2.5 px-5 text-sm font-medium text-white"
              >
                <svg
                  role="status"
                  className="mr-2 inline h-4 w-4 animate-spin text-gray-200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#f18496"
                  />
                </svg>
                Loading...
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
