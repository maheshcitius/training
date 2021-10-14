import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
//import { store } from "./state/index"
import {store} from './helpers'
import Snackbarr from './shared/Snackbar';

ReactDOM.render(
  <React.StrictMode>
 {/* <BrowserRouter> */}

{/* MAKE THE STORE AVAILABLE TO THE ROOT COMP and ALL ITS CHILDREN */}
<Provider store={store}> 
  
<Snackbarr timeout={3000} ></Snackbarr>
        <Router>
     
    <App/>
    </Router>
</Provider>
{/* MAKE THE STORE AVAILABLE TO THE ROOT COMP and ALL ITS CHILDREN */}

{/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
