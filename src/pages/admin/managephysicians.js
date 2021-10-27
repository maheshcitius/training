
// import Page from '../../components/Page';
// import { Icon } from '@iconify/react';
// import plusFill from '@iconify/icons-eva/plus-fill';
// import {
//   Card,
//   Table,
//   Stack,
//   Avatar,
//   Button,
//   Checkbox,
//   TableRow,
//   TableBody,
//   TableCell,
//   Container,
//   Typography,
//   TableContainer,
//   TablePagination
// } from '@mui/material';
// import Scrollbar from '../../components/Scrollbar';
// import React, { useState, useEffect } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { Grid } from '@mui/material'
// import { PhysicanRegistrationForm } from '../physician/PhysicianRegistrationForm'
// import { physiciansService } from '../../services/index';
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { bindActionCreators } from 'redux'
// import { physiciansActions } from '../../actions'

// const initialValue = {
//   firstName: '',
//   lastName: '',
//   dateOfBirth: '',
//   userName: '',
//   email: '',
//   role: 'Physician',
//   mobileNumber: '',
//   password: '',
//   createdOn: '',
//   createdBy: ''
// }

// export const AdminManagePhysicians = () => {

//   const dispatch = useDispatch();
//   const { getAllPhysicians } = bindActionCreators(physiciansActions, dispatch);
//   const physicians = useSelector((state) => state.physicians);
//   const statevelues = useSelector((state) => state);
// console.log('statevelues~~~~~~',statevelues)
//   const [gridApi, setGridApi] = useState(null)
//   const [tableData, setTableData] = useState(null)
//   const [data, setData] = useState(null)
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState(initialValue)
//   const handleClickOpen = () => {
//     setOpen(true);
//   };


// setData(data1);
//console.log('data--',data);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData(initialValue)
//   };ta
//   const url = `http://localhost:3003/users/?role=Physician`
//   const columnDefs = [
//     // { headerName: "ID", field: "id" },
//     { headerName: "firstNme", field: "firstName", },
//     { headerName: "Email", field: "email", },
//     { headerName: "Phone", field: "mobileNumber" },
//     { headerName: "Date of Birth", field: "dateOfBirth" },
//     {
//       cellRendererFramework: (params) =>

//         <div>
//           <Container>

//             <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>Update</Button>
//             <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.data.id)}>Delete</Button>
//           </Container>
//         </div>
//     }
//   ]

//  const  fun = async() => {
//   await physiciansService.getAllPhysicians().then(
//     (result) => {
//        if(result){
//         setTableData(result);   
//    } 
//  });
// }
//   useEffect(() => {
//    fun();

//   }, [])

//   //fetching user data from server
//   // const getUsers = () => {
//   //   fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
//   // }


//  // setTableData(physicians);

//   const onChange = (e) => {
//     const { value, id } = e.target
//     console.log(value, id)
//     setFormData({ ...formData, [id]: value })
//   }
//   const onGridReady = (params) => {
//     setGridApi(params)
//   }

//   // setting update row data to form data and opening pop up window
//   const handleUpdate = (oldData) => {
//     console.log('get the old data', oldData);
//     setFormData(oldData)
//     handleClickOpen()
//   }
//   //deleting a user
//   const handleDelete = (id) => {
//     console.log('id--', id);
//     const confirm = window.confirm("Are you sure, you want to delete this row", id)
//     if (confirm) {
//       const { deletePhysicianById } = bindActionCreators(physiciansActions, dispatch);
//       deletePhysicianById(id);

//     }
//   }
//   const handleFormSubmit = () => {
//     if (formData.id) {
//       //updating a user 
//       console.log('formdata----',formData)
//       const confirm = window.confirm("Are you sure, you want to update this row ?")
//       if (confirm) {
//         const { updatePhysicianById } = bindActionCreators(physiciansActions, dispatch);
//         updatePhysicianById(formData.id,formData);
//         fun();
//       }

//     } else {
//       console.log('formdata--', formData);
//       const { postPhysicians } = bindActionCreators(physiciansActions, dispatch);
//       postPhysicians(formData);
//      // getUsers();
//     }
//   }

//   const defaultColDef = {
//     sortable: true,
//     flex: 1, filter: true,
//     floatingFilter: true
//   }

//   return (


//     <div className="App">
//       <Page title="Physician | Appointments">
//         <Container>
//           <Grid align="right">
//             <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//               <Typography variant="h4" gutterBottom>
//                 User
//           </Typography>
//               <Button
//                 variant="contained"
//                 to="#"
//                 startIcon={<Icon icon={plusFill} />}
//                 onClick={handleClickOpen}
//               >
//                 Add Physician
//           </Button>
//               {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>Add user</Button> */}
//             </Stack>
//           </Grid>

//           <Scrollbar>
//             <TableContainer>
//               <Table>
//                 <div className="ag-theme-alpine" style={{ height: '400px' }}>
//                   <AgGridReact
//                     rowData={tableData}
//                     columnDefs={columnDefs} s
//                     defaultColDef={defaultColDef}
//                     onGridReady={onGridReady}
//                   />
//                 </div>

//               </Table>
//             </TableContainer>
//           </Scrollbar>

//           <PhysicanRegistrationForm open={open} handleClose={handleClose}
//             data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
//         </Container>
//       </Page>
//     </div>

//   );
// }


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
import { filter } from 'lodash';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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

import { openFormDialog } from '../../actions/FormDialogs-action';
import { registration } from '../../reducers/auth.reducer';
import Modal from '@mui/material/Modal';

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

  const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'company', label: 'Email', alignRight: false },
    { id: 'role', label: 'Role', alignRight: false },
    { id: 'mobileNumber', label: 'mobileNumber', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: '' }
  ];
  const getUsers = async () => {
    const users = await axios.get("http://localhost:3003/users/?role=physician").catch((err) => {
      console.log('err', err)
    });
    // console.log(users.data)
    setUSERLIST(users.data)
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.firstName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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
      : (a, b) => -descendingComparator(a, b, orderBy);
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

  const handleDelete = (values) => {
    console.log('insidedelete--', values);
    const confirm = window.confirm(`Are you sure, you want to delete this Physician  ${values.firstName}`);
    if (confirm) {
      const { deletePhysicianById } = bindActionCreators(physiciansActions, dispatch);
      deletePhysicianById(values.id);

    }
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

  const handleView = (values) => {
    console.log('handleView--', values);
    // return(
    //   <PhysicanRegistrationForm/>
    // )
  };
  const dispatch = useDispatch();
  const { openFormDialog } = bindActionCreators(FormDialogsAction, dispatch);

  // calling getUsers function for first time 
  useEffect(() => {
    getUsers();
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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Page title="Physician | Appointments">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Physician
              </Typography>
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
                    const { id, name, role, email, firstName, mobileNumber } = row;
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
                        {/* <TableCell align="left">
                              <Label
                                variant="ghost"
                                color={(status === 'banned' && 'error') || 'success'}
                              >
                                {sentenceCase(status)}
                              </Label>
                            </TableCell> */}

                        <TableCell align="right">
                          {/* <ListItemIcon onClick={handleDelete()} value={row}>
                                <Icon onClick={handleDelete(row.id)}icon={trash2Outline} width={24} height={24} />
                              </ListItemIcon> */}
                          <Button variant="outlined" color="primary" onClick={() => handleDelete(row)}>
                            <Icon icon={trash2Outline} />
                          </Button>
                          <Button variant="outlined" color="primary" onClick={() => handleEdit(row)}>
                            <Icon icon={editFill} />
                          </Button>
                          <Button onClick={handleOpenModel}>Open modal</Button>
                            <Modal
                              open={openModel}
                              onClose={handleCloseModel}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                              </Box>
                            </Modal>
                        
                          {/* <ListItemIcon value={row}>
                                <Icon type="button" onClick={handleEdit(row)} icon={editFill} width={24} height={24} />
                              </ListItemIcon> */}
                          {/* <UserMoreMenu /> */}
                          {/* <PhysicanRegistrationForm/> */}
                          {/* <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls="long-menu"
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClickMenu}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseMenu}
                            PaperProps={{
                              style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                              },
                            }}
                          >

                            <MenuItem selected='Pyxis' onClick={handleCloseMenu}>
                           
                              {/* <Icon  icon={RemoveRedEyeIcon} width={24} height={24}  >
                             view
                              </Icon> 
                            </MenuItem>

                          </Menu> */}
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
      </Container>
    </Page>
  )


};