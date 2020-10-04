import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = () => {
    return localStorage.getItem('login-token') !== null;
}

const PrivateRoute = ({ component: Conponent, ...props }) => {
    console.log("Private Route Props",props)
    return(
        <Route 
        {...props}
        render={() => {
            if(isAuthenticated()) {
                return <Conponent {...props} />;
            }
            return <Redirect to='/login' />
        }}
        />
    )
}
export default PrivateRoute