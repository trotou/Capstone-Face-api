import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Providers from './providers';
import { theme } from './Helpers/makeStyles';

// -----------------------------------------
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Providers>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </Providers>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
