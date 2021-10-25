import React from "react";
import { useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { closeFormDialog } from "../actions/FormDialogs-action";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {DemoForm} from './DemoForm';
import { bindActionCreators } from 'redux';
import { userActions } from '../actions';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Stack, TextField, IconButton, InputAdornment, Button, Alert } from '@mui/material';

export default function Dialogue(props) {
    
  // this can be use when we wanted to pass child form to dilogue component from other component
    const { children, regUrl  }=props; 
      //  console.log( "children",children );

    const {title,subtitle,openDilouge} = useSelector(state => state.FormDialogsReducer)
    
 
  const dispatch = useDispatch();
  
  function handleClose() {
    props.handlerClose(null);
    dispatch(closeFormDialog());
  }

    // const { openFormDialouge1 } = bindActionCreators(userActions, dispatch);

    // const handleSubmit = (values) => {
    //   console.log("values---in dilogue.js",values);
    //   openFormDialouge1({
    //         email:values.email,
    //       })
    //   };


    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text.replace(/['"]+/g, ''));
      } else {
        return Document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      console.log(regUrl);
      copyTextToClipboard(regUrl)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  return (
   
    <Dialog open={openDilouge} onClose={handleClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
       {subtitle}
      </DialogContentText>
      <Stack spacing={3}>
       { children }

       { regUrl!=null ? 
            (<Alert
            action={
              <Button  size="small" onClick={handleCopyClick}>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
              </Button>
            }
          >
            {regUrl} 
          </Alert>): null
       }
       </Stack>
     
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} >Cancel</Button>
    </DialogActions>
  </Dialog>
    
  );
}




     