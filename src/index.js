import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Providers from './providers';
import history from './components/History';

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Providers>
                <App />
            </Providers>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
