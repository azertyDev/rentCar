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
<<<<<<< HEAD
=======
          <Route exact path="/cars" component={Cars} />
>>>>>>> bdefedbc1eb180348e2427e23b6d752ce21ed84c
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
