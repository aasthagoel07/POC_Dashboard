import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    console.log(isAuthenticated())
  return (
    <Route {...rest} render={(props) =>
      isAuthenticated() === true
        ? <Component {...props} />
        : <Route path="/" element={<Navigate replace to="/login" />} />
    } />
  );
}

function isAuthenticated() {
    // check if the user is authenticated
    return localStorage.getItem('token') !== "null";
  }