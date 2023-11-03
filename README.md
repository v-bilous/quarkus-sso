# quarkus-sso

## Running the backend application in dev mode

You can run the Quarkus application in dev mode that enables live coding using:
```shell script
./mvnw compile quarkus:dev
```
## Running the frontend application in dev mode
You can run Angular application in dev mode that enables live coding using:
```shell script
npm start
```
Make sure you have installed Node and NPM before running the Angular app. 

> UI app source code available at `src/main/platform-ui`

## Related Notes
Keycloak Authorization uses an existing application located at https://djai.app/auth
OpenID Connect is implemented for UI with Backend auth.

## Test Users
username: bob  
password: 123456  
allowed games: game1, game3  

username: johndoe  
password: 123456  
allowed games: game1, game2, game3  
