import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext(null);
const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [darkMode, setDarkMode] = useState("light");
  const [showSignUp, setSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        darkMode,
        setDarkMode,
        showSignUp,
        setSignUp,
        showLogin,
        setShowLogin,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
