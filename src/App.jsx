import React from 'react';

import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IndexSignUp from './components/authentication/Seller/SignUp/IndexSignUp';
import Index from './components/layouts/Index';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import SearchProducts from './components/Products/SearchProducts/SearchProducts';
import RegisterProduct from './components/Products/RegisterProduct/RegisterProduct';

//import ListVendors from './components/vendors/ListVendors';
import VendorService from './context/vendors/VendorService';
import IndexSignIn from './components/authentication/Seller/SignIn/IndexSignIn';
import SettingVendor from './components/vendors/settingsVendor/settingVendor';
import ProductService from './context/products/ProductService';
import PanelPedido from './components/Products/PanelPedido';
import SucursalRegister from './components/vendors/SucursalVendor/SucursalRegister';
import DashboardCustomer from './components/customers/DashboardCustomer';
import LoginCustomer from './components/authentication/Customer/LoginCustomer';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductService>
          <VendorService>
            <Header />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/vendor/signup" component={IndexSignUp} />
              <Route exact path="/vendor/signin" component={IndexSignIn} />
              <Route exact path="/products/search" component={SearchProducts} />
              {/* <Route exact path="/products/add" component={RegisterProduct} /> */}
              <Route exact path="/customer/login" component={LoginCustomer} />
              <Route exact path="/vendor/settings" component={SettingVendor} />
              <Route exact path="/pedido-detalle" component={PanelPedido} />
              <Route exact path="/producto-ver" component={RegisterProduct} />
              <Route exact path="/sucursal-ver" component={SucursalRegister} />
              <Route exact path="/customer/dashboard" component={DashboardCustomer} />
              {/* <Route path="/vendor/form-one" component={ FormSellerOne } />
                  <Route path="/vendor/form-two" component={ FormSellerTwo } /> */}
            </Switch>
            <Footer />
          </VendorService>
        </ProductService>
      </Router>
    </div>
  );
}

export default App;
