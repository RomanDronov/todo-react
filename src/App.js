import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotesView from './Notes/NotesView';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
      <div>
          <Router>
              <Switch>
              <Route path="/" exact component={NotesView}/>
              <Route path="/demo"><NotesView demo={true}/></Route> 
              </Switch>
          </Router>
      </div>
  );
}

export default App;
