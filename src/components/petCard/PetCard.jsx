import React from "react";
import { Link } from "react-router-dom";

function PetCard(props) {
  return (
    <div className="card text-center mb-4" style={{ width: "14rem" }}>
      <img src={props.petImage} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.petName}</h5>
        <div className="d-flex justify-content-between">
          <span className="card-text">{props.petStatus}</span>
          <Link>
            <button className="btn btn-primary">More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
