import { useState } from "react";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header"
import MyPets from "./components/myPets/MyPets"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PetDescription from "./components/petDescription/PetDescription";

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(true);
  const [ userName, setUserName ] = useState("Elad Ahdut");

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <div>
        <br />
        {/* <HomePage isLoggedIn={isLoggedIn} userName={userName} /> */}
        {/* <MyPets /> */}
        <PetDescription />
      </div>
    </Router>
  );
}

export default App;
