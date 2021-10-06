import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/components/LandingPage';
import Header from './shared/components/Header/Header';



function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/auth">
          <LandingPage />
        </Route>
        <Redirect to="auth" />
      </Switch>
      </Router>
    </div>
   
  );
}

export default App;
