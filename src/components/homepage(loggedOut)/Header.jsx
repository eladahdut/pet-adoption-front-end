import React from "react";
import LogSigBtn from "./LoginBtn";

function Header() {
  return (
    <header className="container bg-transparent d-flex justify-content-between">
      <LogSigBtn />
      <h1 className="text-secondary display-5">
        Welcome To The Pet Adoption Agency
      </h1>
      <img style={{ width: "3%" }} src="images/paw-solid.svg" alt="app-logo" />
    </header>
  );
}

export default Header;
