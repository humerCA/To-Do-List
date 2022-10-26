import React from "react";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import SignUp from "./Components/SigningOptions/SignUp";

// React Hooks
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <div className="m-0 flex h-screen flex-col p-0">
        <Nav />
        <Body />
        {/* <SignUp /> */}
      </div>
    </>
  );
}

export default App;
