import React from "react";
import LogSigBtn from "../homepage/LoginBtn";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="container-fluid bg-transparent">
      {props.isLoggedIn ? (
        <div className="d-flex justify-content-evenly">
          <div className="row">
            <button className="btn btn-link text-danger">Logout</button>
            <button className="btn btn-link text-info">Settings</button>
          </div>

          <h1 className="text-secondary display-4">Pet Adoption Agency</h1>

          <div className="d-flex flex-column justify-content-center">
            <img
              style={{ width: "25%", marginLeft: "15%", marginTop: "5%" }}
              src="images/paw-solid.svg"
              alt="app-logo"
            />
            <Link to="/">
              <button className="text-dark btn btn-link">Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-evenly">
          <LogSigBtn />
          <h1 className="text-secondary display-5">
            Welcome To The Pet Adoption Agency
          </h1>
          <div className="d-flex flex-column justify-content-center">
            <img
              style={{ width: "25%", marginLeft: "15%", marginTop: "5%" }}
              src="images/paw-solid.svg"
              alt="app-logo"
            />
            <Link to="/">
              <button className="text-dark btn btn-link">Home</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
