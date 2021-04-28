import React from "react";
import {Redirect, Route} from "react-router-dom";

const PublicRoute = ({component, isAuthenticate, currentUser, ...rest}: any) => {
    const routeComponent = (props: any) => {
        if (isAuthenticate) {
            if (currentUser.role === 'user') return <Redirect to={{pathname: '/'}}/>
            else if (currentUser.role === 'admin') return <Redirect to={{pathname: '/admin/products'}}/>
        } else {
            return React.createElement(component, props)
        }
    }
    return <Route {...rest} render={routeComponent}/>;
}
export default PublicRoute
