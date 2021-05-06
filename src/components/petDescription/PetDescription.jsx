import React, { useEffect, useState } from "react";
import { getPetsById, likePet, unlikePet, adoptPet } from "../../lib/api";
import { useAuth } from "../../context/auth";

function PetDescription(props) {
  const [petData, setPetData] = useState({});
  const [isPetLiked, setIspetLiked] = useState(false);
  const petId = props.match.params.petId;
  const auth = useAuth();
  const userId = auth.userId;
  const token = auth.token;

  useEffect(async () => {
    const petData = await getPetsById(petId);
    setPetData(petData);
  }, []);

  function handleLikePet() {
    if (isPetLiked === "true") {
      unlikePet(petId, userId, token);
      setIspetLiked(!isPetLiked);
    } else {
      likePet(petId, userId, token);
      setIspetLiked(!isPetLiked);
    }
  }
  async function handleAdoption() {
    const response = await adoptPet(petId, userId);
    console.log(response);
  }

  return (
    <div className="container d-flex p-3">
      <div className="col-10 bg-light rounded">
        <img
          className="w-50 rounded mx-auto d-block mt-5 mb-2"
          src="https://cdn.the-scientist.com/assets/articleNo/67714/aImg/38606/article-sickpug-l.png"
          alt=""
        />
        <div className="d-flex justify-content-center mb-4">
          <div className="text-start">
            <div>
              Type: <span>{petData.type}</span>
            </div>
            <div>
              Name: <span>{petData.name}</span>
            </div>
            <div>
              Adoption Status: <span>{petData.adoptionStatus}</span>
            </div>
            <div>
              Picture: <span>{petData.picture}</span>
            </div>
            <div>
              Height: <span>{petData.height} cm</span>
            </div>
            <div>
              Weight: <span>{petData.weight} Kg</span>
            </div>
          </div>
          <div className="m-5"></div>
          <div className="text-end">
            <div>
              Color: <span>{petData.color}</span>
            </div>
            <div>
              Bio: <span>{petData.bio}</span>
            </div>
            <div>
              Hypoallergenic: <span>{petData.hypoallerganic}</span>
            </div>
            <div>
              dietary restrictions: <span>{petData.dietryRestrictions}</span>
            </div>
            <div>
              breed of animal: <span>{petData.breed}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block">
        <div
          style={{ width: "110%" }}
          className="btn-group-vertical"
          role="group"
        >
          <button type="button" className="btn btn-primary m-1 ms-3">
            return pet (only visible for owner)
          </button>
          <button
            onClick={handleAdoption}
            type="button"
            className="btn btn-primary m-1 ms-3"
          >
            adopt
          </button>
          <button type="button" className="btn btn-primary m-1 ms-3">
            foster
          </button>
          <button
            onClick={handleLikePet}
            type="button"
            className="btn btn-primary m-1 ms-3"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetDescription;
