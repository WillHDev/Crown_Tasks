import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Header from './shared/components/Header/Header';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

unSubscribeFromAuth = null;

  componentDidMount()  {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });
      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
        <Header currentUser={this.state.currentUser} />
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
  
}

export default App;
