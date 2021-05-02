import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyPets from "./components/myPets/MyPets";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/:userId/settings" component={ProfileSettings} />
        <Route exact path="/pet/user/:id" component={MyPets} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
