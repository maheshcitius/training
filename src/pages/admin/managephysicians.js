import { useState, useEffect } from 'react';
import Page from '../../shared/Page';
import { Link as RouterLink } from 'react-router-dom';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import Dialogue from '../../shared/dialogue';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { FormDialogsAction } from '../../actions';
import PhysicanRegistrationForm from '../physician/PhysicianRegistrationForm';
import { userActions } from '../../actions';
import Scrollbar from '../../components/Scrollbar';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'
import { physiciansActions } from '../../actions'
import { fill, filter } from 'lodash';
import Switch from '@mui/material/Switch';
import ManagePatientForm from '../admin/ManagePatientForm';
import PhysicanView from "../physician/physicianview";
import PageHeader from '../../shared/PageHeader';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Label from '../../components/Label';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../components/_dashboard/user';
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
  Alert,
  ListItemIcon,
} from '@mui/material';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import editFill from '@iconify/icons-eva/edit-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';

import { openFormDialog } from '../../actions/FormDialogs-action';
import Modal from '@mui/material/Modal';
import { physiciansService } from '../../services';

export const AdminManagePhysicians = () => {
  const [USERLIST, setUSERLIST] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('firstName');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);
  const [checked, setChecked] = useState('');

  const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'company', label: 'Email', alignRight: false },
    { id: 'role', label: 'Role', alignRight: false },
    { id: 'mobileNumber', label: 'mobileNumber', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'Action', label: 'Action' }
  ];
  const dispatch = useDispatch();
  const { getAllPhysicians } = bindActionCreators(physiciansActions, dispatch);
  const { getAllUsers } = bindActionCreators(userActions, dispatch);
  const physicians = useSelector((state) => state.authentication.currentUser);
 
  // const getUsers = async () => {
  //   const users = await axios.get("http://localhost:3003/users/?role=physician").catch((err) => {
  //     console.log('err', err)
  //   });
  //   // console.log(users.data)
  //   setUSERLIST(users.data)
  // }
  useEffect(() => {
    physiciansService.getAllPhysicians().then((data) => {
      if (data) {
        setUSERLIST(data);
      }
    });
  }, []);
  // useEffect(()=>{
  //   getAllPhysicians();
  //   getAllUsers();
  //   console.log('getAllPhysicians',getAllPhysicians());
  //   console.log('getAllUsers',getAllUsers());
  // },[])
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    console.log('inside selected')
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.firstName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);
  const isUserNotFound = filteredUsers.length === 0;
  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  
  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleEdit = (values) => {
    console.log('insideedit--', values);
  };
 
  const { updatePhysicianById } = bindActionCreators(physiciansActions, dispatch);
  const handleView = (values) => {
    console.log('handleView--', values);
   
  };

  const { openFormDialog } = bindActionCreators(FormDialogsAction, dispatch);

  // calling getUsers function for first time 
  useEffect(() => {
  //  getUsers();
  }, [])


  const handleClickOpen = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title: "Physician Registration",
      subtitle: "Add new"
    })
  };

  // const { userRegistration } = bindActionCreators(userActions, dispatch);

  // to show registration URL
  const [regUrl, setUrl] = useState(null);
  const [newRegFlag, setRegFlag] = useState(null);

  const handleSubmit = ({ email, firstName, lastName }) => {
    const Url = `http://localhost:3000/register?email=${email}+&firstName=${firstName}&lastName=${lastName}&role=physician`;
    setUrl(Url);
  };

  const handlerClose = (a) => {
    setUrl(a);
  }

  const handlerRegFlag = (a) => {
    setRegFlag(a);
  }


 
 

  const handleChange = (values) => {
    
    const confirm = window.confirm(`Are you sure, you want to delete this Physician  ${values.firstName}`);
    if(confirm){
          if(values.isActive===true){
            alert("want to deactivate");
            values.isActive = false; 
          }else{
            alert("want to activate");
            values.isActive = true;
          }
          updatePhysicianById(values.id,values);
        }
  };

  const handleDelete = (values) => {
    console.log('insidedelete--', values);
    const confirm = window.confirm(`Are you sure, you want to delete this Physician  ${values.firstName}`);
    if (confirm) {
      const { deletePhysicianById } = bindActionCreators(physiciansActions, dispatch);
      deletePhysicianById(values.id);

    }
  };

  return (
    <Page title="Physician | Appointments">
      <PageHeader
        title="Physicians"
        subTitle="Manage Physicians"
        icon={<ScheduleIcon fontSize="large" />}
      />
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
            onClick={handleClickOpen}
          >
            Invite Physician
              </Button>

          <Dialogue regUrl={regUrl} handlerClose={handlerClose}>
            <PhysicanRegistrationForm submit={handleSubmit} />
          </Dialogue>
        </Stack>
        <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={USERLIST.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    console.log('row--', row);
                    const { id, gender, dob, role, email, firstName, mobileNumber, lastName
                      , specialization, experience, isActive } = row;
                    const isItemSelected = selected.indexOf(firstName) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) => handleClick(event, firstName)}
                          />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            {/* <Avatar alt={name} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {firstName}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="left">{role}</TableCell>
                        <TableCell align="left">{mobileNumber}</TableCell>
                        <TableCell align="left">{
                          isActive ?
                            <Label
                              variant="ghost"
                              color={'success'}
                            >
                              {"Active"}
                            </Label> :
                            <Label
                              variant="ghost"
                              color={'error'}
                            >
                              {"InActive"}
                            </Label>
                        }
                        <Switch
                    checked={row.isActive?true:false}
                    onChange={()=>handleChange(row)}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                         

                           
                          </TableCell>
                       <TableCell>
                        <Button onClick={() => handleDelete(row)}>
                          <Icon icon={trash2Outline} />
                        </Button>
                        {/* <Button onClick={() => handleEdit(row)}>
                          <Icon icon={editFill} />
                        </Button> */}
                        
                        <Button onClick={()=>handleOpenModel(row)}>
                          <Icon icon={eyeFill} />
                        </Button>
                        <Modal
                          open={openModel}
                          onClose={handleCloseModel}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <PhysicanView row={row}/>
                        </Modal>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <SearchNotFound searchQuery={filterName} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Container>
    </Page>
  )


};