import axios from "axios";

// const Base_URL = 'http://10.10.10.4:8000/api'
// const Base_URL = 'http://10.10.13.9:8080/auth'
// const Base_URL = 'https://rdfflfi.ph/metro_gps/auth'
const Base_URL = 'https://6386b780d9b24b1be3dce45b.mockapi.io/todoAPI/'
// https://rdfflfi.ph/metro_gps/auth/login

export const usersAPI = axios.create({
    baseURL: Base_URL,
    headers: {
      'Content-Type': 'application/json',
      'Accept' : ' application/json'
    }
})

usersAPI.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );
