import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Box, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const validationSchema = yup.object({
       firstName: yup
      .string("Enter your First Name")
     .max(15, "Must be 15 characters or less")
      .required("First Name is required"),
     lastName: yup
      .string("Enter your Last Name")
       .max(15, "Must be 15 characters or less")
       .required("Last Name is required"),
      dob: yup
           .date("Enter your Birthday")
           .required("Birthday required"),
      gender: yup
      .string("Select the Gender")
       .min(1, "please select Gender")
       .required("Gender is required"),
     ethinicity: yup
     .string("Enter your Ethinicity/Race")
       .max(10, "Must be 10 characters or less")
      .required("Ethinicity/Race is required"),
      education: yup
       .string("Enter your Education")
    .max(10, "Must be 10 characters or less")
       .required("Education is required"),
      employment: yup
      .string("Enter your Employment details")
       .max(15, "Must be 15 characters or less")
      .required("Employment details are required"),
    address: yup
      .string("Enter your Address")
      .max(15, "Must be 15 characters or less")
      .required("Address is required"),
    phoneNumber: yup
      .string("Enter your phone number")
      .required("Phone number is required"),
    medicalhistory: yup
      .string("Enter your Medical History Details")
      .max(15, "Must be 15 characters or less")
      .required("Medical History details are required"),
    familymedicalhistory: yup
      .string("Enter your Family Medical History Details")
      .max(15, "Must be 15 characters or less")
      .required("Family Medical History details are required"),
    surgeries: yup
      .string("Enter your Surgery Details")
      .max(15, "Must be 15 characters or less")
      .required("Surgery details are required"),
    insuranceprovider: yup
      .string("Enter your Insurance Provider Details")
      .max(15, "Must be 15 characters or less")
      .required("Insurance Provider details are required"),
  });
  
export const DemographicsForm = (props) => {
  let formSubmit = props.submit;
  const formik = useFormik({
    initialValues: {
      firstName: "Ramya ",
      lastName: "Vyasabhattu",
      dob: "26/07/1996",
      gender: "female",
      ethinicity: "indian",
      education: "btech",
      employment: "it ",
      address: "hyderabad",
      phoneNumber: "9618478426",
      medicalhistory: "no",
      familymedicalhistory: "no",
      surgeries: "no",
      insuranceprovider: "no",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("in d form")
      formSubmit(values);
    },
  });

  return (
    <div>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 5 }}
      >
        <TextField
          id="firstName"
          name="firstName"
          fullWidth
          required
          margin="normal"
          label="First Name"
          autoComplete="firstName"
          variant="standard"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="lastName"
          name="lastName"
          fullWidth
          required
          margin="normal"
          label="Last Name"
         autoFocus
         autoComplete="lastName"
          variant="standard"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          margin="normal"
          id="dob"
          name="dob"
          required
          label="Date of Birth"
          variant="standard"
          autoFocus
          autoComplete="dob"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.dob}
          onChange={formik.handleChange}
          error={formik.touched.dob && Boolean(formik.errors.dob)}
          helperText={formik.touched.dob && formik.errors.dob}
        />
        <Select
          id="gender"
          name="gender"
          margin="normal"
          value={formik.values.gender}
          required
          fullWidth
          autoComplete="gender"
          variant="standard"
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        >
          <MenuItem value={"Select Gender"} name="gender">
            Select Gender
          </MenuItem>
          <MenuItem value={"Male"} name="gender">
            Male
          </MenuItem>
          <MenuItem value={"Female"} name="gender">
            Female
          </MenuItem>
        </Select>
        <TextField
          id="ethinicity"
          name="ethinicity"
          fullWidth
          required
          margin="normal"
          label="Ethinicity/Race"
          autoComplete="ethinicity"
          autoFocus
          variant="standard"
          value={formik.values.ethinicity}
          onChange={formik.handleChange}
          error={formik.touched.ethinicity && Boolean(formik.errors.ethinicity)}
          helperText={formik.touched.ethinicity && formik.errors.ethinicity}
        />
        <TextField
          id="education"
          name="education"
          fullWidth
          required
          margin="normal"
          label="Education"
          autoComplete="education"
          autoFocus
          variant="standard"
          value={formik.values.education}
          onChange={formik.handleChange}
          error={formik.touched.education && Boolean(formik.errors.education)}
          helperText={formik.touched.education && formik.errors.education}
        />
        <TextField
          id="employment"
          name="employment"
          fullWidth
          required
          margin="normal"
          label="Employment"
          autoComplete="employment"
          autoFocus
          variant="standard"
          value={formik.values.employment}
          onChange={formik.handleChange}
          error={formik.touched.employment && Boolean(formik.errors.employment)}
          helperText={formik.touched.employment && formik.errors.employment}
        />
        <TextField
          id="address"
          name="address"
          fullWidth
          required
          margin="normal"
          label="Address"
          autoComplete="address"
          autoFocus
          variant="standard"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          fullWidth
          required
          type="number"
          margin="normal"
          label="Phone Number"
          autoComplete="phoneNumber"
          autoFocus
          variant="standard"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <TextField
          id="medicalhistory"
          name="medicalhistory"
          fullWidth
          required
          margin="normal"
          label="Medical History"
          autoComplete="medicalhistory"
          autoFocus
          variant="standard"
          value={formik.values.medicalhistory}
          onChange={formik.handleChange}
          error={
            formik.touched.medicalhistory &&
            Boolean(formik.errors.medicalhistory)
          }
          helperText={
            formik.touched.medicalhistory && formik.errors.medicalhistory
          }
        />
        <TextField
          id="familymedicalhistory"
          name="familymedicalhistory"
          fullWidth
          required
          margin="normal"
          label="Family Medical History"
          autoComplete="familymedicalhistory"
          autoFocus
          variant="standard"
          value={formik.values.familymedicalhistory}
          onChange={formik.handleChange}
          error={
            formik.touched.familymedicalhistory &&
            Boolean(formik.errors.familymedicalhistory)
          }
          helperText={
            formik.touched.familymedicalhistory &&
            formik.errors.familymedicalhistory
          }
        />
        <TextField
          id="surgeries"
          name="surgeries"
          fullWidth
          required
          margin="normal"
          label="Surgeries"
          autoComplete="surgeries"
          autoFocus
          variant="standard"
          value={formik.values.surgeries}
          onChange={formik.handleChange}
          error={formik.touched.surgeries && Boolean(formik.errors.surgeries)}
          helperText={formik.touched.surgeries && formik.errors.surgeries}
        />
        <TextField
          id="insuranceprovider"
          name="insuranceprovider"
          fullWidth
          required
          margin="normal"
          label="Insurance Provider"
          autoComplete="insuranceprovider"
          autoFocus
          variant="standard"
          value={formik.values.insuranceprovider}
          onChange={formik.handleChange}
          error={
            formik.touched.insuranceprovider &&
            Boolean(formik.errors.insuranceprovider)
          }
          helperText={
            formik.touched.insuranceprovider && formik.errors.insuranceprovider
          }
        />
        <br/>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Save
        </Button>
      </Box>
    </div>
  );
};

