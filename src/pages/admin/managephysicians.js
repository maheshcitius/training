// import trash2Outline from '@iconify/icons-eva/trash-2-outline';
// import editFill from '@iconify/icons-eva/edit-fill';

// import { Box } from '@mui/material';
// import { filter } from 'lodash';
// import { Icon } from '@iconify/react';
// import { sentenceCase } from 'change-case';
// import { useState, useEffect, useRef } from 'react';
// import plusFill from '@iconify/icons-eva/plus-fill';
// import { Link as RouterLink } from 'react-router-dom';

// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { bindActionCreators } from 'redux'
// import { physiciansActions } from '../../actions'
// import axios from 'axios'
// import { PhysicanRegistrationForm } from '../physician/PhysicianRegistrationForm'
// // material
// import {
//   Card,
//   Table,
//   Stack,
//   Button,
//   Checkbox,
//   TableRow,
//   TableBody,
//   TableCell,
//   Container,
//   ListItemIcon,
//   Typography,
//   TableContainer,
//   TablePagination
// } from '@mui/material';
// // components
// import Page from '../../components/Page';
// import Label from '../../components/Label';
// import Scrollbar from '../../components/Scrollbar';
// import SearchNotFound from '../../components/SearchNotFound';
// import { UserListHead, UserListToolbar, UserMoreMenu } from '../../components/_dashboard/user';


// const TABLE_HEAD = [
//   { id: 'name', label: 'Name', alignRight: false },
//   { id: 'company', label: 'Email', alignRight: false },
//   { id: 'role', label: 'Role', alignRight: false },
//   { id: 'mobileNumber', label: 'mobileNumber', alignRight: false },
//   { id: 'status', label: 'Status', alignRight: false },
//   { id: '' }
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function applySortFilter(array, comparator, query) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   if (query) {
//     return filter(array, (_user) => _user.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
//   }
//   return stabilizedThis.map((el) => el[0]);
// }

// export const AdminManagePhysicians = (props) => {
//   // const [posts, setPosts] = useState([]);
//   const [USERLIST, setUSERLIST] = useState([]);
//   //--
//   const [page, setPage] = useState(0);
//   const [order, setOrder] = useState('asc');
//   const [selected, setSelected] = useState([]);
//   const [orderBy, setOrderBy] = useState('firstName');
//   const [filterName, setFilterName] = useState('');
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const getUsers = async () => {
//     const users = await axios.get("http://localhost:3003/users/?role=Physician").catch((err) => {
//       console.log('err', err)
//     });
//     console.log(users.data)
//     setUSERLIST(users.data)
//   }

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = USERLIST.map((n) => n.firstName);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];
//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleFilterByName = (event) => {
//     setFilterName(event.target.value);
//   };

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

//   const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);
//   console.log('filteredUsers--', filteredUsers);

//   const isUserNotFound = filteredUsers.length === 0;
//   const [open, setOpen] = useState(false);
//   const [scroll, setScroll] = useState('paper');

//   const handleClickOpen = (scrollType) => () => {
//     setOpen(true);
//     setScroll(scrollType);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const descriptionElementRef = useRef(null);
//   useEffect(() => {

//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//     getAllPhysicians();
//     getUsers();
//   }, [open]);



//   const dispatch = useDispatch();
//   const { getAllPhysicians } = bindActionCreators(physiciansActions, dispatch);

//   let [showPassword, seltShowPassword] = useState(false)


//   //const {  userRegistration } = bindActionCreators(userActions, dispatch);
//   const { postPhysicians } = bindActionCreators(physiciansActions, dispatch);
//   const patients = useSelector((state) => state.physicians);

//   console.log('patients--', patients.physicians);
//   console.log('userList', USERLIST);

//   const handleDelete = (values) => {
//     console.log('insidedelete--', values);
//   };

//   const handleEdit = (values) => {
//     console.log('insideedit--', values);
//   };
//   const handleSubmit = (values) => {
//     console.log(values);
//     postPhysicians({
//       firstName: values.firstName,
//       lastName: values.lastName,
//       dateOfBirth: values.dob,
//       userName: values.userName,
//       email: values.email,
//       role: 'Physician',
//       mobileNumber: values.mobileNumber,
//       password: values.password,
//       createdOn: values.createdOn,
//       createdBy: values.updatedOn
//     })
//   };

//   return (
//     <Page title="Physician | Appointments">
//       <Container maxWidth="xl">
//         <Box sl={{ pb: 5 }}>
//           {/* <Typography variant="h4">Hi, Welcome to Admin Manage Physicians</Typography> */}
//         </Box>
//         <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//           <Typography variant="h4" gutterBottom>
//             Physicians
//           </Typography>
//           <Button variant="contained"
//             component={RouterLink}
//             to="#"
//             startIcon={<Icon icon={plusFill} />} onClick={handleClickOpen('paper')}> Add New Physicians</Button>
//           <Dialog
//             open={open}
//             onClose={handleClose}
//             scroll={scroll}
//             aria-labelledby="scroll-dialog-title"
//             aria-describedby="scroll-dialog-description"
//           >
//             <DialogTitle id="scroll-dialog-title">Register here</DialogTitle>
//             <DialogContent dividers={scroll === 'paper'}>
//               <DialogContentText
//                 id="scroll-dialog-description"
//                 ref={descriptionElementRef}
//                 tabIndex={-1}
//               >
//                 <PhysicanRegistrationForm submit={handleSubmit}></PhysicanRegistrationForm>
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//             </DialogActions>
//           </Dialog>
//         </Stack>
//         <Card>
//           <UserListToolbar
//             numSelected={selected.length}
//             filterName={filterName}
//             onFilterName={handleFilterByName}
//           />

//           <Scrollbar>
//             <TableContainer sx={{ minWidth: 800 }}>
//               <Table>
//                 <UserListHead
//                   order={order}
//                   orderBy={orderBy}
//                   headLabel={TABLE_HEAD}
//                   rowCount={USERLIST.length}
//                   numSelected={selected.length}
//                   onRequestSort={handleRequestSort}
//                   onSelectAllClick={handleSelectAllClick}
//                 />
//                 <TableBody>
//                   {filteredUsers
//                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                     .map((row) => {
//                       console.log('row--', row);
//                       const { id, name, role, email, firstName, mobileNumber } = row;
//                       const isItemSelected = selected.indexOf(firstName) !== -1;

//                       return (
//                         <TableRow
//                           hover
//                           key={id}
//                           tabIndex={-1}
//                           role="checkbox"
//                           selected={isItemSelected}
//                           aria-checked={isItemSelected}
//                         >
//                           <TableCell padding="checkbox">
//                             <Checkbox
//                               checked={isItemSelected}
//                               onChange={(event) => handleClick(event, firstName)}
//                             />
//                           </TableCell>
//                           <TableCell component="th" scope="row" padding="none">
//                             <Stack direction="row" alignItems="center" spacing={2}>
//                               {/* <Avatar alt={name} src={avatarUrl} /> */}
//                               <Typography variant="subtitle2" noWrap>
//                                 {firstName}
//                               </Typography>
//                             </Stack>
//                           </TableCell>
//                           <TableCell align="left">{email}</TableCell>
//                           <TableCell align="left">{role}</TableCell>
//                           <TableCell align="left">{mobileNumber}</TableCell>
//                           {/* <TableCell align="left">
//                             <Label
//                               variant="ghost"
//                               color={(status === 'banned' && 'error') || 'success'}
//                             >
//                               {sentenceCase(status)}
//                             </Label>
//                           </TableCell> */}

//                           <TableCell align="right">
//                             <ListItemIcon onClick={handleDelete()} value={row}>
//                               <Icon icon={trash2Outline} width={24} height={24} />
//                             </ListItemIcon>
//                             <ListItemIcon onClick={handleEdit} value={row}>
//                               <Icon icon={editFill} width={24} height={24} />
//                             </ListItemIcon>
//                             <UserMoreMenu />
//                           </TableCell>
//                         </TableRow>
//                       );
//                     })}
//                 </TableBody>
//                 {isUserNotFound && (
//                   <TableBody>
//                     <TableRow>
//                       <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
//                         <SearchNotFound searchQuery={filterName} />
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 )}
//               </Table>
//             </TableContainer>
//           </Scrollbar>

//           <TablePagination
//             rowsPerPageOptions={[5, 10, 15]}
//             component="div"
//             count={USERLIST.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Card>
//       </Container>
//     </Page>
//   )
// };


import Page from '../../components/Page';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
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
  TablePagination
} from '@mui/material';
import Scrollbar from '../../components/Scrollbar';
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid } from '@mui/material'
import { PhysicanRegistrationForm } from '../physician/PhysicianRegistrationForm'

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { physiciansActions } from '../../actions'

const initialValue = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  userName: '',
  email: '',
  role: 'Physician',
  mobileNumber: '',
  password: '',
  createdOn: '',
  createdBy: ''
}

export const AdminManagePhysicians = () => {

  const dispatch = useDispatch();
  const { getAllPhysicians } = bindActionCreators(physiciansActions, dispatch);
  const physicians = useSelector((state) => state.physicians);

  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const url = `http://localhost:3003/users/?role=Physician`
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

            <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>Update</Button>
            <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.data.id)}>Delete</Button>
          </Container>
        </div>
    }
  ]
  // calling getUsers function for first time 
  useEffect(() => {
    //   getUsers();
    getAllPhysicians();
    console.log("Physician",physicians)

  }, [])

  //fetching user data from server
  // const getUsers = () => {
  //   fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  // }
 

  //setTableData(physicians);

  const onChange = (e) => {
    const { value, id } = e.target
    console.log(value, id)
    setFormData({ ...formData, [id]: value })
  }
  const onGridReady = (params) => {
    setGridApi(params)
  }

  // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {
    console.log('get the old data', oldData);
    setFormData(oldData)
    handleClickOpen()
  }
  //deleting a user
  const handleDelete = (id) => {
    console.log('id--', id);
    const confirm = window.confirm("Are you sure, you want to delete this row", id)
    if (confirm) {
      // const { deletePhysicianById } = bindActionCreators(physiciansActions, dispatch);
      // deletePhysicianById(id);

    }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user 
      const confirm = window.confirm("Are you sure, you want to update this row ?")
      if (confirm) {
        // const { updatePhysicianById } = bindActionCreators(physiciansActions, dispatch);
        // updatePhysicianById(formData.id);
   //     getUsers();
      }

    } else {
      console.log('formdata--', formData);
      // const { postPhysicians } = bindActionCreators(physiciansActions, dispatch);
      // postPhysicians(formData);
     // getUsers();
    }
  }

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }
  
  return (


    <div className="App">
      <Page title="Physician | Appointments">
        <Container>
          <Grid align="right">
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" gutterBottom>
                User
          </Typography>
              <Button
                variant="contained"
                to="#"
                startIcon={<Icon icon={plusFill} />}
                onClick={handleClickOpen}
              >
                Add Physician
          </Button>
              {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>Add user</Button> */}
            </Stack>
          </Grid>

          <Scrollbar>
            <TableContainer>
              <Table>
                <div className="ag-theme-alpine" style={{ height: '400px' }}>
                  <AgGridReact
                    rowData={tableData}
                    columnDefs={columnDefs} s
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                  />
                </div>

              </Table>
            </TableContainer>
          </Scrollbar>

          <PhysicanRegistrationForm open={open} handleClose={handleClose}
            data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
        </Container>
      </Page>
    </div>

  );
}