import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import IndexSignUp from './components/authentication/Seller/SignUp/IndexSignUp';
import Index from './components/layouts/Index';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';







function App() {
  return (
    <div className="App">
        
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={ Index } />
              <Route exact path="/vendor/signup" component={ IndexSignUp } />
              {/* <Route path="/vendor/form-one" component={ FormSellerOne } />
              <Route path="/vendor/form-two" component={ FormSellerTwo } /> */}
            </Switch>
            <Footer />
         </Router>
      
    </div>
  );
}

export default App;
