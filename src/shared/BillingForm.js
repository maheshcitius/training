import React, { useState, useEffect } from "react";
import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";
import { TextField, Box, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";

const validationSchema = yup.object({
    amount: yup
      .string("Enter the Billing Amount")
      .max(15, "Must be 15 characters or less")
      .required("Billing Amount is required"),
    description: yup
      .string("Enter the Billing Description")
      .max(40, "Must be 40 characters or less")
      .required("Description is required"),
  });

  const Input = styled("input")({
    display: "none",
  });

  const BillingForm = (props) => {
    let formSubmit = props.submit;
  
    const [isExist, setisExist] = useState(0);
    //let savedValues = props.savedValues?.length > 0 ? props.savedValues[0] : {};
  
    // useEffect(() => {
    //   if (props.savedValues?.length > 0) {
    //     setisExist(1);
    //   }
    // }, []);
  
    //console.log("saved values", savedValues);
  
    const hs = (values) => {
      formSubmit(values);
    };
  
    const formik = useFormik({
      initialValues: {
        amount: "",
        description: ""
      },
      validationSchema: validationSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
        console.log("test", values);
        hs(values);
      },
    });
  
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
      formik;
  
    return (
      <FormikProvider value={formik}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 5 }}
          display="flex"
          flexDirection="column"
          alignItem="center"
          justifyContent="center"
          padding="10"
        >
          <TextField
            id="amount"
            fullWidth
            margin="normal"
            label="Billing Amount"
            autoComplete=""
            autoFocus
            variant="standard"
            size="small"
            {...getFieldProps("amount")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end"></IconButton>
              </InputAdornment>
            }
            error={Boolean(touched.amount && errors.amount)}
            helperText={touched.amount && errors.amount}
          />
          <TextField
            id="description"
            fullWidth
            margin="normal"
            label="Billing Description"
            autoComplete=""
            variant="standard"
            size="small"
            {...getFieldProps("description")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end"></IconButton>
              </InputAdornment>
            }
            error={Boolean(touched.description && errors.description)}
            helperText={touched.description && errors.description}
          />  
          <br />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Save
          </Button>
        </Box>
      </FormikProvider>
    );
  };
  
  export default BillingForm;