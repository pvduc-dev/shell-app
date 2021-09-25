import React from "react";
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import FancyRoute from "./FancyRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <FancyRoute
          path="/"
        >
        </FancyRoute>
      </Switch>
    </Router>
  )
}

export default Routes;
