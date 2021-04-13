import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './route';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};

export default Routes;
