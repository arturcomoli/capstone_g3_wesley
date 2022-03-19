import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>
    </Switch>
  );
};

export default Routes;
