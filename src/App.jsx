import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  ContainerGeneralSeller,
  ContainerRegistroProducto,
} from './components/ui/Containers';

import WelcomeSignUpSeller from './components/authentication/Seller/SignUp/WelcomeSignUpSeller';
import FormSellerOne from './components/authentication/Seller/SignUp/FormSellerOne';
import FormSellerTwo from './components/authentication/Seller/SignUp/FormSellerTwo';
import RegisterProduct from './components/Products/RegisterProduct/RegisterProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <ContainerGeneralSeller>
          <Switch>
            <Route path="/vendor/welcome" component={WelcomeSignUpSeller} />
            <Route path="/vendor/form-one" component={FormSellerOne} />
            <Route path="/vendor/form-two" component={FormSellerTwo} />
          </Switch>
        </ContainerGeneralSeller>
        <ContainerRegistroProducto>
          <Switch>
            <Route
              exact
              path="/vendor/register-products"
              component={RegisterProduct}
            />
          </Switch>
        </ContainerRegistroProducto>
      </Router>
    </div>
  );
}

export default App;
