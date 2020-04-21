import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Route path="/product" component={App} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('products-list-root'))
