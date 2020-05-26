import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  ContainerGeneralSeller,
  ContainerRegistroProducto,
} from './components/ui/Containers';

import IndexSignUp from './components/authentication/Seller/SignUp/IndexSignUp';
import RegisterProduct from './components/Products/RegisterProduct/RegisterProduct';
import SearchProducts from './components/Products/SearchProducts/SearchProducts';
function App() {
  return (
    <div className="App">
      <ContainerGeneralSeller>
        <Router>
          <Switch>
            <Route path="/vendor/signup" component={IndexSignUp} />
            {/* <Route path="/vendor/form-one" component={ FormSellerOne } />
              <Route path="/vendor/form-two" component={ FormSellerTwo } /> */}
            <Route path="/search/product" component={SearchProducts} />
          </Switch>
        </Router>
      </ContainerGeneralSeller>
    </div>
  );
}

export default App;
