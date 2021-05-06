import React, { useEffect } from "react";
import LogSigBtn from "../homepage/LoginBtn";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

function Header() {
  const auth = useAuth();
  return (
    <header className="container-fluid bg-transparent">
      {auth.token ? (
        <div className="d-flex justify-content-evenly">
          <div className="row">
            <button
              onClick={auth.removeToken}
              className="btn btn-link text-danger"
            >
              Logout
            </button>
            <Link className="link text-dark" to={"settings/" + auth.userId}>
              Settings
            </Link>
            <Link className="link text-dark" to={"settings/" + auth.userId}>
              Dashboard
            </Link>
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
              style={{ width: "25%", marginLeft: "38%", marginTop: "5%" }}
              src="images/paw-solid.svg"
              alt="app-logo"
            />
            <Link className="text-dark btn btn-link" to="/">
              Home
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
