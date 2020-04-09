import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage.jsx';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <HomePage />
            </div>
        );
    }
}

export default App;