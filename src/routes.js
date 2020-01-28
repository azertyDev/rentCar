import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/user";
const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
