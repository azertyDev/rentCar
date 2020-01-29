import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/user";
<<<<<<< HEAD
import Login from "./Pages/Login/Login";
=======
import Cars from "./Pages/Cars/cars";
>>>>>>> 9c29a70d598e86eab6ee5af99c7904a6dd676ac0
const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
=======
          <Route exact path="/users" component={Users} />
          <Route exact path="/cars" component={Cars} />
>>>>>>> 9c29a70d598e86eab6ee5af99c7904a6dd676ac0
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
