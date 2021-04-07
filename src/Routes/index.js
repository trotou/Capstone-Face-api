import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
// import Route from './route';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = () => {
    return (
        <Switch>
            <Router exact path="/">
                <HomePage />
            </Router>
            <Router path="/login">
                <LoginPage />
            </Router>
            <Router path="/register">
                <RegisterPage />
            </Router>
            <Router>
                <NotFoundPage />
            </Router>
        </Switch>
    );
};

export default Routes;
