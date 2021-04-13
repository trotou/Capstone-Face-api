import React from 'react';
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
    //   const token = JSON.parse(localStorage.getItem("token"));
    const token = 'dasd';

    return (
        <ReactDOMRoute
            {...rest}
            render={() => {
                return isPrivate === !!token ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/' : '/home'
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;
