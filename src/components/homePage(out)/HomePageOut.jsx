import React from "react";
import Header from "./Header";
import Intro from "./Intro";

function HomePageOut() {
  return (
    <div className="text-center">
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
      <br />
      this will be a link to the search page
    </div>
  );
}

export default HomePageOut;
