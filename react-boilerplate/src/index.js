import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router basename="/react">
        <div>
            <Route path="/" component={App} />
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
