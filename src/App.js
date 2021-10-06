import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/components/LandingPage';



function App() {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <HomePage />
        </Route>
        <Route to="/auth">
          <LandingPage />
        </Route>
        <Redirect to="auth" />
      </Switch>
    </Router>
   
  );
}

export default App;
