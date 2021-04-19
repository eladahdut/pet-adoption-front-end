import { useState } from "react";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Elad Ahdut");

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <div>
        <br />
        <HomePage isLoggedIn={isLoggedIn} userName={userName} />
      </div>
    </Router>
  );
}

export default App;
