import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Routes from './Routes';

const App = () => {
    return (
        <div className="App">
            <TopBar />
            <Routes />
        </div>
    );
};

export default App;
