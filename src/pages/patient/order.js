import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../actions";
import { bindActionCreators } from "redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Redirect, Link, NavLink } from "react-router-dom";

// const TAX_RATE = 0.07;

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(quantity, unitPrice) {
//   return quantity * unitPrice;
// }

// function createRow(name, description, quantity, unitPrice) {
//   const totalPrice = priceRow(quantity, unitPrice);
//   return { name, description, quantity, unitPrice, totalPrice };
// }

// function subtotal(items) {
//   return items
//     .map(({ totalPrice }) => totalPrice)
//     .reduce((sum, i) => sum + i, 0);
// }

export const PatientOrder = () => {
  const dispatch = useDispatch();

  const { getOrderDetails } = bindActionCreators(orderActions, dispatch);

  const orderInfo = useSelector((state) => state.order);
  let UserInformation = (localStorage.getItem('user') )? JSON.parse(localStorage.getItem('user') ) : '';

  // let rows = [];

  useEffect(() => {
    getOrderDetails(UserInformation.user.id);
    console.log("Order info", orderInfo);
  }, []);

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

  const displayRazorpay = async (amount) => {
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
      amount: amount * 10,
      name: "Patient Portal",
      description: "Thanks for purchasing",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Patient Portal",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // if (UserInfo?.order?.billings) {
  //   UserInfo.order.billings.map((item) => {
  //     rows.push(
  //       createRow(
  //         item.name,
  //         item.description,
  //         item.available_quantity,
  //         item.price
  //       )
  //     );
  //   });
  //   console.log(rows);
  // }

  // const invoiceSubtotal = subtotal(rows);
  // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  // const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  // console.log(invoiceSubtotal, invoiceTaxes, invoiceTotal);

  return (
    <div>
      <div>Order Details</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={()=> displayRazorpay(2222)} variant="contained" color="primary">Next</Button>
      \</div>
      {/* <div>
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
                  <TableCell align="right">
                    {ccyFormat(row.unitPrice)}
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(row.totalPrice)}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <NavLink to="/patient/checkout">
            {" "}
            <Button>Checkout</Button>{" "}
          </NavLink>
        </div>
      </div> */}
    </div>
  );
};
