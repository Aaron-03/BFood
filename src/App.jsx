import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  ContainerGeneralSeller
} from './components/ui/Containers';

import IndexSignUp from './components/authentication/Seller/SignUp/IndexSignUp';

function App() {
  return (
    <div className="App">
      <ContainerGeneralSeller>
        <Router>
            <Switch>
              <Route path="/vendor/signup" component={ IndexSignUp } />
              {/* <Route path="/vendor/form-one" component={ FormSellerOne } />
              <Route path="/vendor/form-two" component={ FormSellerTwo } /> */}
            </Switch>
          </Router>
      </ContainerGeneralSeller>
    </div>
  );
}

export default App;
