import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
=======
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
>>>>>>> dfe82749bf408e2b6a31a9cb6a12b15f6d09ab86
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
