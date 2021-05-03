import React, { useState } from "react";
import PetCard from "../petCard/PetCard";

function MyPets() {
  const [usersPets, setUsersPets] = useState([]);

  return (
    <div className="text-center">
      <h2 className="display-3">My Pets</h2>
      <br />
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
          Saved Pets
        </label>
      </div>
      <br />
      <br />
      <br />
      {!usersPets ? (
        <h3 className="display-5">
          You currently do not own or foster any pets.
        </h3>
      ) : (
        <div className="container d-flex flex-wrap justify-content-between">
          {usersPets.map((pet, index) => {
            return (
              <PetCard
                key={index}
                petImage={pet.img}
                petName={pet.name}
                petStatus={pet.status}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyPets;

// {
//   img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
//   name: "Bishik",
//   status: "Adopted",
// },
// {
//   img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
//   name: "Aizik",
//   status: "Conducted",
// },
// {
//   img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
//   name: "Hilik",
//   status: "Aborted",
// },
// {
//   img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
//   name: "Hilik",
//   status: "Aborted",
// },
