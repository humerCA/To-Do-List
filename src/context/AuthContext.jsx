import React, { useState, createContext } from "react";

export const UserContext = createContext(null);
const AuthContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState("light");
  const [showSignUp, setSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <UserContext.Provider
      value={{
        darkMode,
        setDarkMode,
        showSignUp,
        setSignUp,
        showLogin,
        setShowLogin,
        showMenu,
        setShowMenu,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
