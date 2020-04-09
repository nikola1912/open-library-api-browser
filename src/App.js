import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import BookPage from './components/BookPage.jsx';

class App extends React.Component {
    state = {
        testData: null
    }

    displayBookPage(bookData) {
        this.setState({
            testData: "SEOIFJSEIOFO"
        })
        console.log("HELLO THERE");
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route
                            path="/" exact
                            render={() => <HomePage onBookClick={() => this.displayBookPage()} />} />
                        <Route
                            path="/book/:id" exact
                            component={BookPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;