import React from 'react';
import logo from './logo.svg';
import './App.css';

// docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app 26556e7ada22

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    LIVE
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
