import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../actions";
import { bindActionCreators } from "redux";
import { Redirect, Link, NavLink } from "react-router-dom";


import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import Dialogue from '../../shared/dialogue';


import Scrollbar from '../../components/Scrollbar';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'
import { physiciansActions } from '../../actions'
import { fill, filter } from 'lodash';
import Switch from '@mui/material/Switch';


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
  TableHead,
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

import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import {  Tab } from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab"





export const PatientOrder = () => {
  const dispatch = useDispatch();

  const { getOrderDetails, updateBillingDetails } = bindActionCreators(orderActions, dispatch);
  const [orderDetails, setOrderDetails] = useState([]);

  const orderInfo = useSelector((state) => state.order);
  let UserInformation = (localStorage.getItem('user') )? JSON.parse(localStorage.getItem('user') ) : '';

  const TABLE_HEAD_PENDING = [
    { id: 'appointmentName', label: 'Appointment Name', alignRight: false },
    { id: 'appointmentDate', label: 'Appointment Date', alignRight: false },
    { id: 'billedAmount', label: 'Billed Amount', alignRight: false },
    { id: 'description', label: 'Description', alignRight: false },
    { id: 'paymentStatus', label: 'Payment Status', alignRight: false },
    { id: 'Action', label: 'Action' }
  ];

  const TABLE_HEAD_PAID = [
    { id: 'appointmentName', label: 'Appointment Name', alignRight: false },
    { id: 'appointmentDate', label: 'Appointment Date', alignRight: false },
    { id: 'billedAmount', label: 'Billed Amount', alignRight: false },
    { id: 'description', label: 'Description', alignRight: false },
    { id: 'paymentStatus', label: 'Payment Status', alignRight: false },
    { id: 'paymentdate', label: 'Payment Date', alignRight: false },
    { id: 'transactionId', label: 'Transaction Id', alignRight: false },
  ];

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getOrderDetails(UserInformation.user.id);
    console.log("Order Info----------", orderInfo);    
  }, []);
  
  useEffect(()=>{
    setOrderDetails(orderInfo.billings);
  },[orderInfo]);

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, id) => {
    console.log(orderDetails);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_mGvGo8IiCLCSfr",
      currency: "INR",
      amount: amount * 100,
      name: "Patient Portal",
      description: "Thanks for purchasing",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("line 120 - Payment Successfully");
        let payload={
          status: "paid",
          transactionId: response.razorpay_payment_id,
          paymentDate: new Date()
        }
        updateBillingDetails(id, payload);
      },
      prefill: {
        name: "Patient Portal",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  

  return (
    <Container maxWidth="xl"> 
    <TabContext value={value}>

<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
  <TabList onChange={handleChange} aria-label="lab API tabs example">
    <Tab label="Pending Payment" value="1" />
    <Tab label="Completed" value="2" />
  </TabList>
  </Box>
<TabPanel value="1">
  <div style={{ height: 400, width: "100%" }}>
  <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              {/* {<UserListHead
                // order={order}
                //orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={6}
                // numSelected={selected.length}
                // onRequestSort={handleRequestSort}
                // onSelectAllClick={handleSelectAllClick}
              />} */}
              <TableHead>
                  <TableRow>
                  {
                    TABLE_HEAD_PENDING
                    .map((row)=>{
                      return(
                          <TableCell
                            key={row.id}
                            align="left"
                          >{row.label}</TableCell>
                      );
                    })
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetails
                  .map((row) => {
                    console.log('row--', row);
                    const { id, appointmentTitle, appointmentName, billedAmount, description, paymentStatus} = row;

                    if(row.status==="pending"){
                      return (
                      <TableRow
                        hover
                        key={id}
                      >
                        <TableCell align="left">{row.appointmentTitle}</TableCell>
                        <TableCell align="left">{row.appointmentScheduleDate} {row.appointmentScheduleTime}</TableCell>
                        <TableCell align="left">{row.amount}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                       <TableCell>
                        <Button  onClick={()=> displayRazorpay(row.amount, row.id)}>
                          Pay Now
                        </Button>
                        {/* <Button onClick={() => handleEdit(row)}>
                          <Icon icon={editFill} />
                        </Button> */}
                        
                        {/* {<Button onClick={()=>handleOpenModel(row)}>
                          <Icon icon={eyeFill} />
                        </Button>} */}
                        
                        </TableCell>
                      </TableRow>
                    );}
                  })}
              </TableBody> 
            </Table>
          </TableContainer>
        </Scrollbar>
  </div>
</TabPanel>
<TabPanel value="2">
  <div style={{ height: 400, width: "100%" }}>
  <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              {/* {<UserListHead
                // order={order}
                //orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={6}
                // numSelected={selected.length}
                // onRequestSort={handleRequestSort}
                // onSelectAllClick={handleSelectAllClick}
              />} */}
              <TableHead>
                  <TableRow>
                  {
                    TABLE_HEAD_PAID
                    .map((row)=>{
                      return(
                          <TableCell
                            key={row.id}
                            align="left"
                          >{row.label}</TableCell>
                      );
                    })
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetails
                  .map((row) => {
                    console.log('row--', row);
                    const { id, appointmentTitle, appointmentName, billedAmount, description, paymentStatus} = row;

                    if(row.status==="paid"){
                      return (
                      <TableRow
                        hover
                        key={id}
                      >
                        <TableCell align="left">{row.appointmentTitle}</TableCell>
                        <TableCell align="left">{row.appointmentScheduleDate} {row.appointmentScheduleTime}</TableCell>
                        <TableCell align="left">{row.amount}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                        <TableCell align="left">{row.paymentDate}</TableCell>
                        <TableCell align="left">{row.transactionId}</TableCell>
                       
                      </TableRow>
                    );}
                  })}
              </TableBody> 
            </Table>
          </TableContainer>
        </Scrollbar>
  </div>
</TabPanel>
</TabContext>
      <Box sx={{ width: '100%' }}>
      
        
        </Box>
      </Container>
  );
};

{/* <div>
      <div>Order Details</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={()=> displayRazorpay(2222)} variant="contained" color="primary">Next</Button>
      </div>
</div> */}
