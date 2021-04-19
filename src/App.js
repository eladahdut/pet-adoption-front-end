import { useState } from "react";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header";
import Search from "./components/search/Search"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);
  const [ userName, setUserName ] = useState("Elad Ahdut");

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/search" component={Search} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
