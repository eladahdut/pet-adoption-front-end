import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { getUserById } from "../../lib/api";

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
          <div className="container col-6 bg-light rounded p-3">
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
          <h2 className="display-4">welcome back {userName}</h2>
          <div
            className="btn-group-vertical"
            role="group"
            aria-label="Basic example">
            <Link to="/search">
              <button type="button" className="btn btn-primary">
                Search a pet
              </button>
            </Link>
            <Link to={"/pet/user/" + auth.userId}>
              <button
                style={{ width: "139%" }}
                type="button"
                className="btn btn-warning">
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
