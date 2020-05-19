<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react'
import RegisterFormSeller from './components/registerFormSellers/registerFormSeller'

function App () {
  return (
    <div className="App">
      <h1>Pagina Principal</h1>
      <RegisterFormSeller />
    </div>
  )
}

export default App
=======
import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginFormSeller from './components/authentication/Seller/LoginFormSeller/LoginFormSeller';
import SignUpFormSeller from './components/authentication/Seller/SignUpFormSeller/SignUpFormSeller';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/vendor/signin" component={LoginFormSeller} />
          <Route path="/vendor/signup" component={SignUpFormSeller} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
>>>>>>> dfe82749bf408e2b6a31a9cb6a12b15f6d09ab86
