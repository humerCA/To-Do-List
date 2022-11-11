import React, { useState, useContext, useEffect } from "react";
import TextInput from "../UIComponents/TextInput";
import { Link } from "react-router-dom";
import LoginImage from "../../Images/Login.png";
import { UserContext } from "../../context/AuthContext";
// import axios from "../../api/axios";
import { usersAPI } from "../../api/axios";

const LoginForm = (props) => {
  const { setUserData } = useContext(UserContext);
  const [post, setPost] = useState([]);
  const { login, setLogin } = useState([]);

  // API
  const userList = async () => {
    const response = await usersAPI.get("/get-users");
    setPost(response?.data);
  };

  useEffect(() => {
    console.log(post);
  }, [post]);

  // const userLogin = async () => {
  //   const loginData = { username: "roy1234", password: "1234" };
  //   const response = await usersAPI
  //     .post("/login", loginData)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       alert(response.errors);
  //     });
  // };

  const [formLoginData, setformLoginData] = useState({
    username: "",
    password: "",
  });

  const { setShowLogin } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformLoginData((prevFormLoginData) => ({
      ...prevFormLoginData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setShowLogin(false);

    setUserData({ username: "roy123", password: "1234" });

    const response = await usersAPI.post("/login", userData);
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   alert(response.errors);
    // });
  };

  return (
    <>
      <div className="absolute inset-0 z-50 m-auto box-border flex select-none justify-center bg-gray-800 bg-opacity-70 ">
        <form className="relative m-auto flex flex-row justify-end">
          <button
            type="button"
            className="absolute z-30 flex flex-row justify-end px-5 py-3 text-lg font-bold text-black dark:text-gray-50"
            onClick={() => setShowLogin(false)}
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
            <Link to="/main">
              <button
                placeholder="Submit"
                name="submit"
                onClick={handleLogin}
                className="mt-5 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
