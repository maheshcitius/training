import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { toggleSnackbarClose } from "../actions/snackbar-actions";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

export default function Snackbarr({timeout}) {


  const [position, setPosition] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  }); 

  const dispatch = useDispatch();
  const SHOW = useSelector(state => state.snack.toggleSnackbar)
  const MESSAGE = useSelector(state => state.snack.message)
  const TYPE = useSelector(state => state.snack.type)

  function handleClose() {
    dispatch(toggleSnackbarClose());
  }


  return (
   
      <Snackbar
      anchorOrigin={position}

        autoHideDuration={timeout}
        open={SHOW}
        onClose={handleClose}
      >
            <Alert onClose={handleClose} severity={TYPE? TYPE : 'success'} sx={{ width: '100%' }}>
            {MESSAGE}
            </Alert>
      </Snackbar>
    
  );
}
