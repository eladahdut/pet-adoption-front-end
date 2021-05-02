import { useState } from "react";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UIStore } from "./components/stateStore/StateStore";

function App() {
  const isLoggedIn = UIStore.useState((s) => s.isLoggedIn);
  const [userName, setUserName] = useState("Elad Ahdut");

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="user:id/settings" component={ProfileSettings} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
