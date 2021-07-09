import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Component {...props} />
    )} />
  );
};

export const PrivateRoute = ({ component: Component }) => {
  return (
    <Route
      render={(props) => {
        let componentRender = <Component {...props} />;
        // let token = localStorage.getItem('token')
        // let homeCompoent = <Redirect
        //       to='/'
        //     />
        //check login
        return componentRender
        // if (!token) {
        //     return componentRender
        // }else{
        //     return homeCompoent
        // }
      }}
    />
  )
}