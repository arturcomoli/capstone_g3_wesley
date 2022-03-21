import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
};

export default Routes;
