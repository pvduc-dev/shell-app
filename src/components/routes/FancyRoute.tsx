import React, {Component} from 'react';
import nProgress from 'nprogress';
import {Route, RouteProps} from "react-router-dom";

import 'nprogress/nprogress.css'

class FancyRoute extends Component<RouteProps> {
  componentWillMount() {
    nProgress.start()
  }

  componentDidMount() {
    nProgress.done()
  }

  render() {
    return (
      <Route
        {...this.props}
      />
    );
  }
}

export default FancyRoute;
