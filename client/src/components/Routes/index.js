import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Component {...props} />
    )} />
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) => {
        let componentRender = <Component {...props} />;
        let token = Cookies.get('token')
        let user = JSON.parse(localStorage.getItem('infoUser'))
        console.log(user, 'user')
        let loginCompoent = <Redirect
              to='/login'
            />
        //check login
        // if (!accessToken) {
        //   dispatch(actions.modalActions.setLoginModal({show: true}))
        //   return componentRender
        // }
        // if (user.status === 'inactive') return notActiveComponent
        // if (user.status === 'block') return blockPageComponent
        switch(rest.routeRole){
          case 'admin':
            if(user.role === 'admin'){
              return componentRender
            }else{
              return loginCompoent
            }
          default :
            if(user.role === 'user' || user.role === 'admin'){
              return componentRender
            }else{
              return loginCompoent
            }
        }


      }}
    />
  )
}