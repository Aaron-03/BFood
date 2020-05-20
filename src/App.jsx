import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginFormSeller from './components/authentication/Seller/LoginFormSeller/LoginFormSeller';
import SignUpFormSeller from './components/authentication/Seller/SignUpFormSeller/SignUpFormSeller';
import FirstPageForSeller from './components/authentication/Seller/FirstPageForSeller/FirstPageForSeller';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/vendor/signin" component={LoginFormSeller} />
          <Route path="/vendor/signup" component={SignUpFormSeller} />
          <Route path="/vendor/first-page" component={FirstPageForSeller} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
