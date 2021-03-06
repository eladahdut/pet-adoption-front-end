import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { getUserById } from "../../lib/api";
import "./homePage.css";

function HomePage() {
  const auth = useAuth();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(auth.userName);
  }, [auth.userName]);

  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <br />
      {!auth.token ? (
        <>
          <div className="container preview col-6 border shadow p-3 mb-5 rounded">
            Petfinder is only a directory of homeless pets and pet adoption
            organizations. No information in Petfinder is guaranteed. Although
            the information on Petfinder is updated frequently, it is always
            best to call the facility or organization that lists the pet to
            insure it is still available and to insure the information listed in
            Petfinder is accurate. It is crucial that any pet found through an
            adoption service be thoroughly examined by a veterinarian
            immediately upon adoption. Any pets found, adopted through, or
            listed in Petfinder are the sole responsibility of the adoption
            organizations and/or the adopting party.
          </div>
          <br />
          <Link to="/search">
            <button className="btn btn btn-outline-dark">
              Search for a pet right now
            </button>
          </Link>
        </>
      ) : (
        <>
          <h2 id="welcome-back" className="display-4">
            welcome back {userName}
          </h2>
          <hr
            style={{ color: "antiquewhite", border: "3px solid antiquewhite" }}
          />
          <div className="btn-group-vertical" role="group">
            <Link to="/search">
              <button type="button" className="btn btn-outline-dark">
                Search a pet
              </button>
            </Link>
            <br />
            <Link to={"/pet/user/" + auth.userId}>
              <button
                style={{ width: "139%" }}
                type="button"
                className="btn btn-outline-dark">
                My Pets
              </button>
            </Link>
          </div>
          <br />
          <div></div>
        </>
      )}
    </div>
  );
}

export default HomePage;
