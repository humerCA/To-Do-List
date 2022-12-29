import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Todo from "./Components/Main/Todo";
import NotFound from "./Pages/NotFound";
import AuthContext from "./Context/AuthContext";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/main" element={<Todo />} exact />
          <Route path="/about" element={<About />} exact>
            <Route path="company" element={<h1>Company</h1>} exact />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </AuthContext>
  );
}

export default App;
