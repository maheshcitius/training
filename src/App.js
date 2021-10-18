import './App.css';
import {
  BrowserRouter,
  Link,
  Outlet,
  useRoutes
} from 'react-router-dom';

import { useSelector } from "react-redux"


import {routes} from './constants/index'

function App() {
  
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState)
  
  let element = useRoutes(routes);
  return element;

  }

export default App;