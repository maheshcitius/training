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
import { userActions, patientsAction } from '../../actions';
import Scrollbar from '../../components/Scrollbar';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'
// import { patientsAction } from '../../actions';
import { ManagePatientUpdateForm } from '../../shared/ManagePatientUpdateForm';
import { ManagePatientView } from '../../shared/ManagePatientView';
import { IconButton } from '@mui/material';
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
import { closeFormDialog } from "../../actions/FormDialogs-action";
import { openFormDialog } from '../../actions/FormDialogs-action';

export const AdminManagePatients = () => {

  const dispatch = useDispatch();
  const { openFormDialog } = bindActionCreators(FormDialogsAction, dispatch);
  const { updateUser } = bindActionCreators(userActions, dispatch);
  const { getPatientDemographicsDetails } = bindActionCreators(patientsAction, dispatch);
  const { getPatientImmunizationDetails } = bindActionCreators(patientsAction, dispatch);


  const { FlagActionPatient } = useSelector(state => state.FormDialogsReducer)

   // calling getUsers function for first time 
  useEffect(() => {
    getUsers();
  }, [])

  const handleUpSubmit = (values) => {
        let userId =  values.id;
        let payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: values.dateOfBirth,
          userName: values.userName,
          email: values.email,
          mobileNumber: values.mobileNumber
        }
        console.log("----------payload-----------",payload);
        updateUser(userId,payload);
        getUsers();
        dispatch(closeFormDialog());
    };

  const handleClickOpen = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title:"Patient Registration",
      subtitle:"Add new",
      FlagActionPatient:"add"
    })
  };

  const handleClickOpenUpdateForm = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title:"Update Patient",
      subtitle:"Details",
      FlagActionPatient:"edit"
    })
  };

  const handleClickOpenView = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title:"Patient",
      subtitle:"Details",
      FlagActionPatient:"view"
    })
  };
  
  // const { userRegistration } = bindActionCreators(userActions, dispatch);

  // to show registration URL
    const [regUrl, setUrl] = useState(null);
    const [newRegFlag, setRegFlag] = useState(null);
    const [FlagPatient, setFlagPatient]=useState(null);

    // const resetValueflagPatient=(a)=>{
    //   setFlagPatient(a)
    // }

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
      // { headerName: "ID", field: "id" , hide: true,},
      { headerName: "firstNme", field: "firstName", },
      { headerName: "Email", field: "email", },
      { headerName: "Phone", field: "mobileNumber" },
      { headerName: "Date of Birth", field: "dateOfBirth" },
      {
         cellRendererFramework: (params) => 
         
        <div>
          <Container>
            {/* {console.log("params.data",params.data)} */}
            <Button variant="outlined" color="primary" onClick={() => handleView(params.data)}>View</Button>
            <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>Edit</Button>
            <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.data.id)}>Delete</Button>
           
          </Container>
        </div>
      }
    ]

    const handleView=(params)=>{
      console.log('handleView', params);
      setFormData(params);
      getPatientDemographicsDetails(params.id);
      getPatientImmunizationDetails(params.id);
      handleClickOpenView();
    }

    const handleUpdate = (oldData) => {
      console.log('get the old data', oldData);
      setFormData(oldData);
      // setFlagPatient(true);
      handleClickOpenUpdateForm()
    }

    const handleDelete = (id) => {
      console.log('id--',id);
      const confirm = window.confirm("Are you sure, you want to delete this row", id)
      if (confirm) {
          const { deletePatientById } = bindActionCreators(patientsAction, dispatch);
          deletePatientById(id);
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
                
                {
                  (FlagActionPatient=="add")?
                    <ManagePatientForm submit={handleSubmit} />:(FlagActionPatient=="edit")?
                    <ManagePatientUpdateForm  data={formData} handleUpSubmit={handleUpSubmit} />:
                    <ManagePatientView  data={formData} />
                }
                

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