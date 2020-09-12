import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Consumer from './TeamContext'
import {BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Consumer>
    <Router>
    <App />
    </Router>
  </Consumer>,
  document.getElementById('root')
)

