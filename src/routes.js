import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/user";
import Login from "./Pages/Login/login";
import Cars from "./Pages/Cars/cars";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path={['/admin', '/admin2']} component={Users} />
          <Route exact path="/cars/:name" component={Cars} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
