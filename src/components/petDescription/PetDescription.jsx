import React from "react";

function PetDescription(props) {
  return (
    <div className="container d-flex p-3">
      <div className="col-10 bg-light rounded">
        <img
          className="w-75 rounded mx-auto d-block mt-5 mb-2"
          src="https://cdn.the-scientist.com/assets/articleNo/67714/aImg/38606/article-sickpug-l.png"
          alt=""
        />
        <div className="d-flex justify-content-center mb-4">
          <div className="text-start">
            <div>Type (dog, cat)</div>
            <div>Name</div>
            <div>Adoption Status</div>
            <div>Picture</div>
            <div>Height</div>
            <div>Weight</div>
          </div>
          <div className="m-5"></div>
          <div className="text-end">
            <div>Color</div>
            <div>Bio</div>
            <div>Hypoallergenic (yes/no)</div>
            <div>dietary restrictions</div>
            <div>breed of animal (Poodle, Siamese)</div>
          </div>
        </div>
      </div>
      <div className="col-4 d-block">
        <div
          style={{ width: "55%" }}
          className="btn-group-vertical"
          role="group"
        >
          <button type="button" className="btn btn-primary m-1 ms-3">
            return pet (only visible for owner)
          </button>
          <button type="button" className="btn btn-primary m-1 ms-3">
            adopt
          </button>
          <button type="button" className="btn btn-primary m-1 ms-3">
            foster
          </button>
          <button type="button" className="btn btn-primary m-1 ms-3">
            save for later/unsave
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetDescription;
