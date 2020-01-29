import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/user";
import Login from "./Pages/Login/Login";
const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
