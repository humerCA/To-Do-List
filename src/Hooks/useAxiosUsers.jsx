import { useState, useEffect } from "react";
import { usersAPI } from "../api/Users";

// const useAxiosFetch = (configObject) => {
//   const { axiosInstance, method, url, requestConfig = {} } = configObject;
//   const [response, setResponse] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

const fetchData = async (data) => {
  try {
    // setLoading(true);
    const result = await usersAPI.post("/login", data);
    console.log(result.data);
    localStorage.setItem("token", result.data.data.token);
    localStorage.setItem("username", result.data.data.username);
  } catch (err) {
    console.log(err.message);
    setError(err.message);
  } finally {
    // setLoading(false);
  }
};

export default fetchData;
