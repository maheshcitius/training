import "./App.css";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";

import Router from "./constants/routes";
import { useDispatch } from "react-redux";
//import { medicalDataActions ,userActions } from './actions'
import { medicalDataActions, userActions } from "./redux-store/actions";

export default function App() {
  const dispatch = useDispatch();

  //dispatch(medicalDataActions.getAllergies())
  //dispatch(medicalDataActions.getMedications())
  //dispatch(userActions.getAllUsers())
  dispatch(medicalDataActions.getAllergies());
  dispatch(medicalDataActions.getMedications());
  dispatch(userActions.getAllUsers());

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
