import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Matches from './Components/Matches';
import TeamList from './Components/TeamList';
import Standings from './Components/Standings';
import Navbar from './Components/Navbar';

const App=()=> {


  return (
    <>
      
     <Router>
     <Switch>
      <Route exact path="/" component={TeamList} />
     <Route exact path="/matches" component={Matches} />
     <Route exact path="/standing" component={Standings} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
