import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import MyPets from "./components/myPets/MyPets";
import Search from "./components/search/Search";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import AuthProvider, { useAuth } from "./context/auth";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const AppRouter = () => {
  let auth = useAuth();
  if (!auth.isInitiallyLoaded) {
    return <div></div>;
  }
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/signup">
          {auth.token && <Redirect to="/" />}
          {!auth.token && <h1>Signup</h1>}
        </Route>
        <Route path="/login">
          {auth.token && <Redirect to="/" />}
          {!auth.token && <Login />}
        </Route>
        <PrivateRoute path="/products/new">
          <ProductForm />
        </PrivateRoute>
        <PrivateRoute path="/products/:productId">
          <Product />
        </PrivateRoute>
        <PrivateRoute exact path="/products">
          <MyProducts />
        </PrivateRoute> */}
        {/* <PrivateRoute path="/">
          <HomePage />
          <Redirect to="/products" />
        </PrivateRoute> */}
        <Route
          exact
          path="/settings/:userId"
          render={(routeProps) => <ProfileSettings {...routeProps} />}
        />
        <Route
          exact
          path="/pet/user/:userId"
          render={(routeProps) => <MyPets {...routeProps} />}
        />
        <Route
          exact
          path="/search"
          render={(routeProps) => <Search {...routeProps} />}
        />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

// import "./App.css";
// import HomePage from "./components/homepage/HomePage";
// import Header from "./components/header/Header";
// import Search from "./components/search/Search";
// import ProfileSettings from "./components/profileSettings/ProfileSettings";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MyPets from "./components/myPets/MyPets";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/search" component={Search} />
//         <Route path="/:userId/settings" component={ProfileSettings} />
//         <Route exact path="/pet/user/:id" component={MyPets} />
//         <Route exact path="/" component={HomePage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
