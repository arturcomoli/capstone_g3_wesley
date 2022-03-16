import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import TestPage from "../pages/TestPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TestPage />
      </Route>
    </Switch>
  );
};

export default Routes;
