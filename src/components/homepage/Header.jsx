import React from "react";
import LogSigBtn from "./LoginBtn";

function Header(props) {
  return (
    <header className="container bg-transparent">
      {props.isLoggedIn ? (
        <div className="d-flex justify-content-evenly">
          <div className="row">
            <button className="btn btn-link text-danger">Logout</button>
            <button className="btn btn-link text-info">Settings</button>
          </div>

          <h1 className="text-secondary display-4">Pet Adoption Agency</h1>

          <img
            style={{ width: "3%" }}
            src="images/paw-solid.svg"
            alt="app-logo"
          />
        </div>
      ) : (
        <div className="d-flex justify-content-between">
          <LogSigBtn />
          <h1 className="text-secondary display-5">
            Welcome To The Pet Adoption Agency
          </h1>

          <img
            style={{ width: "3%" }}
            src="images/paw-solid.svg"
            alt="app-logo"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
