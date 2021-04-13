import React from "react";
import Header from "./Header";
import Intro from "./Intro";

function HomePageOut() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container col-6 bg-light rounded p-3">
        <Intro />
      </div>
    </div>
  );
}

export default HomePageOut;
