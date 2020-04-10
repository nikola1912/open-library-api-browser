import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import BookPage from './components/BookPage.jsx';

const App = (props) => (
    <Router>
        <div className="app">
            <Switch>
                <Route
                    path="/" exact
                    component={HomePage} />
                <Route
                    path="/book/:id" exact
                    component={BookPage} />
            </Switch>
        </div>
    </Router>
);

export default App;