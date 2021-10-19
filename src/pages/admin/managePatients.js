
import Page from '../../shared/Page';
import { Link as RouterLink } from 'react-router-dom';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import Dialogue from '../../shared/dialogue';
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { FormDialogsAction } from '../../actions';
import ManagePatientForm  from '../admin/ManagePatientForm';
import { userActions } from '../../actions'

import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box

} from '@mui/material';

import { openFormDialog } from '../../actions/FormDialogs-action';

export const AdminManagePatients = () => {
  const dispatch = useDispatch();
  
  const { openFormDialog } = bindActionCreators(FormDialogsAction, dispatch);

  const handleClickOpen = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title:"Patient Registration",
      subtitle:"Add new"
    })
  };

  // const { openFormDialouge1 } = bindActionCreators(userActions, dispatch);
  const { userRegistration } = bindActionCreators(userActions, dispatch);


  // const handleSubmit = (values) => {
  //   console.log("values---in dilogue.js",values);
  //   openFormDialouge1({
  //         email:values.email,
  //       })
  //   };

  const handleSubmit = (values) => {
    console.log(values);
     userRegistration({
        firstName:values.firstName,
        lastName:values.lastName,
        dateOfBirth:values.dob,
        email:values.email,
        role: 'patient',
        mobileNumber: values.mobileNumber,
        password: values.password,
        createdOn: values.createdOn,
        createdBy: values.updatedOn
       })
     };
    return (
        <Page title="Physician | Appointments">
          <Container maxWidth="xl">
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" gutterBottom>
                Patient
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="#"
                startIcon={<Icon icon={plusFill} />}
                onClick={handleClickOpen}
              >
                New Patient
              </Button>
              <Dialogue>
                <ManagePatientForm submit={handleSubmit} />
              </Dialogue>
            </Stack>
          </Container>
        </Page>
  )
    

};