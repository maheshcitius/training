import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { closeFormDialog } from "../actions/FormDialogs-action";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {DemoForm} from './DemoForm';
import { bindActionCreators } from 'redux';
import { userActions } from '../actions';


  

export default function Dialogue(props) {
    
  // this can be use when we wanted to pass child form to dilogue component from other component
    // const { children }=props; 
    //    console.log( "children",children );

    const {title,subtitle,openDilouge} = useSelector(state => state.FormDialogsReducer)
    
 
  const dispatch = useDispatch();
  
  function handleClose() {
    dispatch(closeFormDialog());
  }

    const { openFormDialouge1 } = bindActionCreators(userActions, dispatch);

    const handleSubmit = (values) => {
      console.log("values---in dilogue.js",values);
      openFormDialouge1({
            email:values.email,
          })
      };


  return (
   
    <Dialog open={openDilouge} onClose={handleClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
       {subtitle}
      </DialogContentText>
      {/* /other form called  in body */}
       <DemoForm submit={handleSubmit}/> 
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
    
  );
}




     