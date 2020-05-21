import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import LoginFormSeller from './components/authentication/Seller/LoginFormSeller/LoginFormSeller';
import SignUpFormSeller from './components/authentication/Seller/SignUpFormSeller/SignUpFormSeller';
import FirstPageForSeller from './components/authentication/Seller/FirstPageForSeller/FirstPageForSeller';
import RegisterProduct from './components/Products/RegisterProduct/RegisterProduct';
=======
import {
  ContainerGeneralSeller
} from './components/ui/Containers';

import WelcomeSignUpSeller from './components/authentication/Seller/SignUp/WelcomeSignUpSeller';
import FormSellerOne from './components/authentication/Seller/SignUp/FormSellerOne';

>>>>>>> 476b31e6b55fece8909b43559d0cc48c4b503b10

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route path="/vendor/signin" component={LoginFormSeller} />
          <Route path="/vendor/signup" component={SignUpFormSeller} />
          <Route path="/vendor/first-page" component={FirstPageForSeller} />
          <Route path="/product/register" component={RegisterProduct} />
        </Switch>
      </Router>
=======
      <ContainerGeneralSeller>
        <Router>
            <Switch>
              <Route path="/vendor/welcome" component={ WelcomeSignUpSeller } />
              <Route path="/vendor/form-one" component={ FormSellerOne } />
            </Switch>
          </Router>
      </ContainerGeneralSeller>
>>>>>>> 476b31e6b55fece8909b43559d0cc48c4b503b10
    </div>
  );
}

export default App;
