import React, {Suspense} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch, useLocation} from "react-router-dom";
// @ts-ignore
const MapRoutes = React.lazy(() => import('map/Routes'));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/map"
        >
          <Suspense fallback={<></>}>
            <MapRoutes/>
          </Suspense>
        </Route>
        <Redirect to="/map" from="/" />
      </Switch>
    </Router>
  )
}

export default Routes;
