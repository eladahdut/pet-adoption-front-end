import React, { useState } from "react";
import LogSigBtn from "./LoginBtn";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header className="container bg-transparent d-flex justify-content-between">
      <LogSigBtn />
      <h1 className="text-secondary display-5">
        Welcome To The Pet Adoption Agency
      </h1>
      {isLoggedIn ? (
        <button className="btn btn-link btn-outline-success">Settings</button>
      ) : (
        ""
      )}
      <img style={{ width: "3%" }} src="images/paw-solid.svg" alt="app-logo" />
    </header>
  );
}

export default Header;
