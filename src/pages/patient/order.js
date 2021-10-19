import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {orderActions} from '../../actions';
import { bindActionCreators } from 'redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { responsiveFontSizes, createMuiTheme } from "@mui/core";
import { ThemeProvider } from '@mui/styles';
import theme from '../../constants/theme';
import { Container } from "@mui/material";

import Box from '@mui/material/Box';
import { makeStyles, withStyles } from '@mui/styles';

import { Stepper, Step, Grid, StepLabel, StepConnector } from '@mui/material';
import PropTypes from 'prop-types';
import { ContactMail, Info, Payment } from '@mui/icons-material';

import clsx from 'clsx';


const TAX_RATE = 0.07;


function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}
  
function priceRow(quantity, unitPrice) {
    return quantity * unitPrice;
}

function createRow(name, description, quantity, unitPrice) {
    const totalPrice = priceRow(quantity, unitPrice);
    return { name, description, quantity, unitPrice, totalPrice };
}

function subtotal(items) {
    return items.map(({ totalPrice }) => totalPrice).reduce((sum, i) => sum + i, 0);
  }

  const useStyles = makeStyles(() => ({
    boxWrapper: {
        marginBottom: "55px",
        minHeight: "calc(26vh + 260px)"
    },
    container: {
        position: "relative",
        zIndex: "1100",
        marginTop: "95px",
        marginBottom: "45px",
    },
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    },
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        background: theme.palette.primary.main,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        background: theme.palette.primary.main
    },
}));

const StepperIcons = props => {
    const classes = useStyles();
    const { active, completed } = props;

    const icons = {
        1: <ContactMail />,
        2: <Info />,
        3: <Payment />,
        4: <Payment />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

StepperIcons.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

const Connector = withStyles(theme => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            background: theme.palette.primary.main
        },
    },
    completed: {
        '& $line': {
            background: theme.palette.primary.main
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
}))(StepConnector);

export const PatientOrder = () => {
    const dispatch = useDispatch();

    const { getOrderDetails } = bindActionCreators(orderActions, dispatch);

    const UserInfo = useSelector((state) => state);

    let rows = [];

    useEffect(() => {
        getOrderDetails();
    }, [])

      
      if(UserInfo.order.billings){
        UserInfo.order.billings.map((item) => {
            rows.push(
                createRow(item.name, item.description, item.available_quantity, item.price)
            );
        })
        console.log(rows);
      }

      const invoiceSubtotal = subtotal(rows);
      const invoiceTaxes = TAX_RATE * invoiceSubtotal;
      const invoiceTotal = invoiceTaxes + invoiceSubtotal;

      console.log(invoiceSubtotal, invoiceTaxes, invoiceTotal)

      const classes = useStyles();

      

        const icons = {
            1: <ContactMail />,
            2: <Info />,
            3: <Payment />,
        };

    return(
        <div>
            <div>Order Details</div>
            <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={3}>
                          Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.desc}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell align="right">{row.description}</TableCell>
                          <TableCell align="right">{row.quantity}</TableCell>
                          <TableCell align="right">{ccyFormat(row.unitPrice)}</TableCell>
                          <TableCell align="right">{ccyFormat(row.totalPrice)}</TableCell>
                        </TableRow>
                      ))}

                      <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tax</TableCell>
                        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
            </div>
            <ThemeProvider theme={theme}>
                <Box component="main" className={classes.boxWrapper} gutterBottom>
                    <Container maxWidth="md" className={classes.container}>
                    <Paper elevation={5}>
                        <Stepper alternativeLabel className={classes.stepper} connector={<Connector />}>
                            {/* Change the number of loops here based on StepContent */}
                            {[1, 2, 3].map(e => (
                                <Step key={e}>
                                    <StepLabel StepIconComponent={StepperIcons} />
                                </Step>
                            ))}
                        </Stepper>
                        <Box className={classes.mainBox}>
                           <Grid
                            container
                            spacing={3}
                            direction="column"
                            justify="space-around"
                            alignItems="center"
                            style={{ height: "400px" }}
                            >
                            </Grid>
                        </Box>
                    </Paper>
                    </Container>
                </Box>
            </ThemeProvider>
        </div>
    );
}