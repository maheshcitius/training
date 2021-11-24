import React from "react";
import * as yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string("Enter your First Name")
    .min(4, "First Name should be of minimum 8 characters length")
    .required("First Name required"),
  lastName: yup
    .string("Enter your Last Name")
    .min(4, "Last Name should be of minimum 4 characters length")
    .required("Last Name required"),
  dob: yup.date("Enter your Birtday").required("Birtday required"),
  mobileNumber: yup
    .number("Enter your Mobile Number")
    .min(10, "User Name should be of 10 characters length")
    .required("User Name required"),
});

export const ManagePatientUpdateForm = (props) => {
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    userName,
    email,
    mobileNumber,
  } = props.data;

  let formSubmit = props.handleUpSubmit;

  const formik = useFormik({
    initialValues: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dob: dateOfBirth,
      userName: userName,
      email: email,
      mobileNumber: mobileNumber,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formSubmit(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  // console.log("{handleSubmit}",{handleSubmit});
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              id="firstName"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              id="lastName"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            id="email"
            type="email"
            label="Email address"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            {...getFieldProps("mobileNumber")}
            error={touched.mobileNumber && Boolean(errors.mobileNumber)}
            helperText={touched.mobileNumber && errors.mobileNumber}
          />
          <TextField
            fullWidth
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            {...getFieldProps("dob")}
            error={touched.dob && Boolean(errors.dob)}
            helperText={touched.dob && errors.dob}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};
