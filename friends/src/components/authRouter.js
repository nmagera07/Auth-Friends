import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            'Content-Type': 'application.json',
            'Authorization': `${token}`,
        }
        
    })
    
}

export default PrivateRoute;