import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";

import LandingPage from "../pages/LandingPage";

// import Profile from "../pages/Profile";
import Routine from "../pages/Routine";
// import Team from "../pages/Team";
import Exercises from "../pages/Exercises";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile">{/* <Profile/> */}</Route>
      <Route path="/routine">
        <Routine />
      </Route>
      <Route path="/exercises">
        <Exercises />
      </Route>
      <Route path="/team">{/* <Team/> */}</Route>
    </Switch>
  );
};

export default Routes;
