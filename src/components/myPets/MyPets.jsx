import React from "react";

function MyPets() {
  return (
    <div>
      <h2 className="display-5">My Pets</h2>
      <div className="btn-group" role="group">
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Pets
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          My Pets
        </label>
      </div>
    </div>
  );
}

export default MyPets;
