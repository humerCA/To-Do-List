import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import LoginForm from "./Components/SigningOptions/LoginForm";

function App() {
  return (
    <>
      <div className="m-0 flex h-screen flex-col p-0">
        <Nav />
        <Body />
      </div>
    </>
  );
}

export default App;
