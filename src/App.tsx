import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./components/routes";
import {keycloak} from "./utils/keycloak";

keycloak.init({
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
}).then((auth) => {
  if (auth) {
    ReactDOM.render(
      <Routes/>,
      document.getElementById('root')
    )
  } else {
    keycloak.login()
  }
})
