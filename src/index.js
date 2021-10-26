import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
//import { store } from "./state/index"
//import {store} from './helpers'
import {store} from './redux-store/index'
import Snackbarr from './shared/Snackbar';
import Dialogue from './shared/dialogue';
// style + assets
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.render(
  <HelmetProvider>
    
    <Provider store={store}> 
      <Snackbarr timeout={3000} ></Snackbarr>
      <Router>
        <App />
      </Router>
      {/* <Dialogue /> */}
    </Provider>
    
    
  </HelmetProvider>,
  document.getElementById('root')
);

reportWebVitals();
