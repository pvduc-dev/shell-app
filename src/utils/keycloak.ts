import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
  url: 'https://accounts.pvduc.dev/auth',
  realm: 'internal',
  clientId: 'frontend',
})

keycloak.onAuthSuccess = () => {
  console.log(keycloak.tokenParsed)
}

export { keycloak };
