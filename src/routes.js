import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/user";
import Cars from "./Pages/Cars/cars";
const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/cars" component={Cars} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
