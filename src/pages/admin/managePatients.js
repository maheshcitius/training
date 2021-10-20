import { useState } from 'react';
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
  Box,
  Alert

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

  const { userRegistration } = bindActionCreators(userActions, dispatch);

  const [regUrl, setUrl] = useState(null);
  // const [showAlert, setAlert]




  const handleSubmit = ({email,firstName,lastName}) => {
    // console.log(values);
    const Url=`http://localhost:3000/register?email=${email}+&firstName=${firstName}&lastName=${lastName}&role=patient`;
    setUrl(Url);
    console.log(regUrl);

    //  userRegistration({
    //     firstName:values.firstName,
    //     lastName:values.lastName,
    //     dateOfBirth:values.dob,
    //     email:values.email,
    //     role: 'patient',
    //     mobileNumber: values.mobileNumber,
    //     password: values.password,
    //     createdOn: values.createdOn,
    //     createdBy: values.updatedOn
    //    })
     };

    const handlerClose=(a)=>{
      setUrl(a);
    } 


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
                Invite Patient
              </Button>
              <Dialogue regUrl={regUrl} handlerClose={handlerClose}>
                <ManagePatientForm submit={handleSubmit} />
              </Dialogue>
            </Stack>
          </Container>
        </Page>
  )
    

};