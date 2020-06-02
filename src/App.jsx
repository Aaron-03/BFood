import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IndexSignUp from './components/authentication/Seller/SignUp/IndexSignUp';
import Index from './components/layouts/Index';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

//import ListVendors from './components/vendors/ListVendors';
import VendorService from './context/vendors/VendorService';

<<<<<<< HEAD
//import RegisterProduct from './components/Products/RegisterProduct/RegisterProduct';
import SearchProducts from './components/Products/SearchProducts/SearchProducts';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <VendorService>
            <Route exact path="/" component={Index} />
            <Route exact path="/vendor/signup" component={IndexSignUp} />
            <Route exact path="/search/product" component={SearchProducts} />
          </VendorService>

          {/* <Route path="/vendor/form-one" component={ FormSellerOne } />
              <Route path="/vendor/form-two" component={ FormSellerTwo } /> */}
        </Switch>
        {/*<ListVendors />*/}
        <Footer />
      </Router>
=======

function App() {
  return (
    <div className="App">
        
        <Router>
          <VendorService>
            <Header />
              <Switch>
                
                  <Route exact path="/" component={ Index } />
                  <Route exact path="/vendor/signup" component={ IndexSignUp } />
                
                {/* <Route path="/vendor/form-one" component={ FormSellerOne } />
                <Route path="/vendor/form-two" component={ FormSellerTwo } /> */}
              </Switch>
            <Footer />
          </VendorService>
         </Router>
      
>>>>>>> 323e12237883941b9a21029a09624707137dad4c
    </div>
  );
}

export default App;
