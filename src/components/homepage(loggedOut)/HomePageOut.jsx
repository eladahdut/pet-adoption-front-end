import React from "react";
import Header from "./Header";
import Intro from "./Intro";

function HomePageOut() {
  return (
    <>
      <div>
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container col-6 bg-light">
        <Intro />
      </div>
    </>
  );
}

export default HomePageOut;
