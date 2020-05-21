import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ContainerGeneralSeller } from './components/ui/Containers';

import WelcomeSignUpSeller from './components/authentication/Seller/SignUp/WelcomeSignUpSeller';
import FormSellerOne from './components/authentication/Seller/SignUp/FormSellerOne';
import FormSellerTwo from './components/authentication/Seller/SignUp/FormSellerTwo';
import RegisterProduct from './components/Products/RegisterProduct/RegisterProduct';

function App() {
  return (
    <div className="App">
      <ContainerGeneralSeller>
        <Router>
          <Switch>
            <Route path="/vendor/welcome" component={WelcomeSignUpSeller} />
            <Route path="/vendor/form-one" component={FormSellerOne} />
            <Route path="/vendor/form-two" component={FormSellerTwo} />
            <Route
              path="/vendor/register-products"
              component={RegisterProduct}
            />
          </Switch>
        </Router>
      </ContainerGeneralSeller>
    </div>
  );
}

export default App;
