import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { snackbarActionCreators } from "./state/index"
import Snackbarr from './shared/Snackbar';

function App() {
  
  const dispatch = useDispatch();
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState)

  const { toggleSnackbarOpen, toggleSnackbarClose } = bindActionCreators(snackbarActionCreators, dispatch);

  return (
    <div className="App">
     
     <button onClick={() => toggleSnackbarOpen({message:'Am opening snackbar',type:'success'}) }>Open Snackbar</button>
     <button onClick={() => toggleSnackbarClose() }>Close Snackbar</button>

     <Snackbarr timeout={3000} ></Snackbarr>

    </div>
  );
}

export default App;
