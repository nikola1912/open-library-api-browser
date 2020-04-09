import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage.jsx';

class App extends React.Component {

    displayBookPage(bookData) {
        console.log(bookData);
    }

    render() {
        return (
            <div className="app">
                <HomePage onBookClick={(bookData) => this.displayBookPage(bookData)} />
            </div>
        );
    }
}

export default App;