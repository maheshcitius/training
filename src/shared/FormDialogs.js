import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { FormDialogsAction } from '../actions';
import demoForm from './DemoForm';

export default function FormDialogs() {

  // console.log(useSelector());

   const openDilouge = useSelector(state => state.FormDialogsReducer.openDilouge);
  // console.log("openDilouge",openDilouge);

   const title = useSelector(state => state.FormDialogsReducer.title);
  const subtitle = useSelector(state => state.FormDialogsReducer.subtitle);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  // calling action
  const { openFormDialog } = bindActionCreators(FormDialogsAction, dispatch);

  const handleClickOpen = () => {
    openFormDialog({
      title:"pournima.p",
      subtitle:"sub title"
    })
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // // for now hardcoding value passed
  // const handleSubmit = () => {
  //   openFormDialog({
  //         title:"pournima.p",
  //         subtitle:"sub title"
  //       })
  //   };

  console.log({open});
  console.log("title",title);


  return (
    <div>
        
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
    </div>
  );
}
