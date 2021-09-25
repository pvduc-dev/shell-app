import React, {Component} from 'react';
import {Route, RouteProps} from "react-router-dom";

class FancyRoute extends Component<RouteProps> {
  render() {
    return (
      <Route
        {...this.props}
      />
    );
  }
}

export default FancyRoute;
