import "./App.css";
import HomePageOut from "./components/homepage/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <br />
        <HomePageOut />
      </div>
    </Router>
  );
}

export default App;
