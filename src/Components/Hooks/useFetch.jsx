import { useState, useEffect } from "react";

useEffect(() => {
  handleSubmit({
    username: "roy123",
    password: "1234",
  });

  console.log(post);
}, [post]);

const useFetch = async (user) => {
  // user.preventDefault();
  fetch("http://10.10.10.4:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch the data of the API");
      }
      return res.json();
    })
    .then((data) => {
      setUserData(data);
      console.log(data);
    })
    .catch((err) => {
      setError(err.message);
    });
};

export default useFetch;
