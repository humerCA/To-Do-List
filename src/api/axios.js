import axios from "axios";

export const usersAPI = axios.create({
    baseURL: 'http://10.10.10.4:8000/api'
})

usersAPI.interceptors.request.use(
    config => {
    //   const token = localStorage.getItem('token')
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
      return config;
    },
    error => Promise.reject(error)
  );
