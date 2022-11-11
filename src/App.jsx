import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Todo from "./Components/Main/Todo";
import NotFound from "./Components/Pages/NotFound";
import AuthContext from "./context/AuthContext";
import LoginForm from "./Components/SigningOptions/LoginForm";

function App() {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/main" element={<Todo />} exact />
        <Route path="/about" element={<About />} exact>
          <Route path="company" element={<h1>Company</h1>} exact />
        </Route>
        <Route path="*" element={<NotFound />} exact></Route>
      </Routes>
    </AuthContext>
  );
}

export default App;
