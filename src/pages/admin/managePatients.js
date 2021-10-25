import { useState , useEffect } from 'react';
import Page from '../../shared/Page';
import { Link as RouterLink } from 'react-router-dom';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import Dialogue from '../../shared/dialogue';
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { FormDialogsAction } from '../../actions';
import ManagePatientForm  from '../admin/ManagePatientForm';
import { userActions } from '../../actions';
import Scrollbar from '../../components/Scrollbar';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'
import { patientsAction } from '../../actions';
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

   // calling getUsers function for first time 
   useEffect(() => {
    getUsers();
  }, [])

  const handleClickOpen = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title:"Patient Registration",
      subtitle:"Add new"
    })
  };
  
  // const { userRegistration } = bindActionCreators(userActions, dispatch);

  // to show registration URL
    const [regUrl, setUrl] = useState(null);
    const [newRegFlag, setRegFlag] = useState(null);

    const handleSubmit = ({email,firstName,lastName}) => {
      const Url=`http://localhost:3000/register?email=${email}+&firstName=${firstName}&lastName=${lastName}&role=patient`;
      setUrl(Url);
    };

    const handlerClose=(a)=>{
      setUrl(a);
    } 

    const handlerRegFlag=(a)=>{
      setRegFlag(a);
    } 

    // To feetch data
    const url = `http://localhost:3003/users/?role=patient`

    const [tableData, setTableData] = useState(null);

    const getUsers = async () => {
      const users = await axios.get("http://localhost:3003/users/?role=patient").catch((err) => {
        console.log('err', err)
      });
      setTableData(users.data)
    }
    // table colunm Data
    const initialValue = { 
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      userName: '',
      email: '',
      role: 'patient',
      mobileNumber: '',
      password: '',
      createdOn: '',
      createdBy: '' 
    }
    const defaultColDef = {
      sortable: true,
      flex: 1, filter: true,
      floatingFilter: true
    }
    const [formData, setFormData] = useState(initialValue)
    const columnDefs = [
      // { headerName: "ID", field: "id" },
      { headerName: "firstNme", field: "firstName", },
      { headerName: "Email", field: "email", },
      { headerName: "Phone", field: "mobileNumber" },
      { headerName: "Date of Birth", field: "dateOfBirth" },
      {
         cellRendererFramework: (params) => 
         
        <div>
          <Container>
            {console.log("params.data",params.data)}
            <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>Update</Button>
            <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.data.id)}>Delete</Button>
          </Container>
        </div>
      }
    ]

    const handleUpdate = (oldData) => {
      console.log('get the old data', oldData);
      setFormData(oldData)
      handleClickOpen()
    }

    const handleDelete = (id) => {
      console.log('id--',id);
      const confirm = window.confirm("Are you sure, you want to delete this row", id)
      if (confirm) {
          const { deletePatientById } = bindActionCreators(patientsAction, dispatch);
          deletePatientById(id);
      }
    }

    const handleFormSubmit = () => {
      if (formData.id) {
        //updating a user 
        const confirm = window.confirm("Are you sure, you want to update this row ?")
        if(confirm){
          // const { updatePhysicianById } = bindActionCreators(physiciansActions, dispatch);
          // updatePhysicianById(formData.id);
        getUsers();
        }
      } else {
        console.log('formdata--',formData);
        // const { postPhysicians } = bindActionCreators(physiciansActions, dispatch);
        // postPhysicians(formData);
        getUsers();
      }
    }
    
    const [gridApi, setGridApi] = useState(null)

    const onGridReady = (params) => {
      setGridApi(params)
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
            <Scrollbar>
                  <TableContainer>
                    <Table>
                    <div className="ag-theme-alpine" style={{ height: '400px' }}>
                      <AgGridReact
                        rowData={tableData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                      />
                    </div>
                    </Table>
                </TableContainer>
              </Scrollbar>
          </Container>
        </Page>
  )
    

};