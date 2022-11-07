import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext(null);
const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [darkMode, setdarkMode] = useState("light");
  return (
    <UserContext.Provider
      value={{ userData, setUserData, darkMode, setdarkMode }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
