import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from "./state/index"

ReactDOM.render(
  <React.StrictMode>
 <BrowserRouter>

{/* MAKE THE STORE AVAILABLE TO THE ROOT COMP and ALL ITS CHILDREN */}
<Provider store={store}> 
    <App/>
</Provider>
{/* MAKE THE STORE AVAILABLE TO THE ROOT COMP and ALL ITS CHILDREN */}

</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
