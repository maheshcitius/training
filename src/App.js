import './App.css';
import {
  BrowserRouter,
  Link,
  Outlet,
  useRoutes
} from 'react-router-dom';

import { useSelector } from "react-redux"
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

import Router from './constants/routes'

export default function App() {


<<<<<<< HEAD

}

export default App;
=======
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
>>>>>>> cb90fd361585bb5fe40b0d92c40ac457d6132ade
