import React, { useEffect, useState } from "react";
import { getUserById, getUserPets } from "../../lib/api";
import { useAuth } from "../../context/auth";
import PetCard from "../petCard/PetCard";

function MyPets() {
  const auth = useAuth();
  // const [usersPets, setUsersPets] = useState([]);
  const [petsToDisplay, setPetsToDisplay] = useState(null);
  const [userPets, setUserPets] = useState(null);

  useEffect(() => {
    async function fetchUserPets() {
      const pets = await getUserPets(auth.userId, auth.token);
      setUserPets(pets);
    }
    fetchUserPets();
  }, [petsToDisplay]);

  function handleClick(e) {
    setPetsToDisplay(e);
  }

  return (
    <div className="text-center">
      <h2 className="display-3">My Pets</h2>
      <br />
      <div className="btn-group" role="group">
        <input
          onClick={(e) => handleClick(e.target.value)}
          value="myPets"
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Pets
        </label>

        <input
          onClick={(e) => handleClick(e.target.value)}
          value="likedPets"
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
      {petsToDisplay ? (
        petsToDisplay === "likedPets" ? (
          userPets.likedPets.map((pet) => {
            console.log(petsToDisplay);
            return (
              <PetCard
                key={pet._id}
                petId={pet._id}
                petImage={pet.img}
                petName={pet.name}
                petStatus={pet.adoptionStatus}
              />
            );
          })
        ) : (
          <h3>You currently do not like any pet</h3>
        )
      ) : petsToDisplay === "adoptedPets" ? (
        userPets.adoptedPets.map((pet) => {
          return (
            <PetCard
              key={pet._id}
              petId={pet._id}
              petImage={pet.img}
              petName={pet.name}
              petStatus={pet.adoptionStatus}
            />
          );
        })
      ) : (
        <h3>You currently do not own any pet</h3>
      )}
    </div>
  );
}

export default MyPets;
