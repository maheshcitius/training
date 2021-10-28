import React from "react";
import { Field, FormikProvider, Formik, useFormik } from "formik";
import * as yup from "yup";
import { TextField, Box, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
const validationSchema = yup.object({
  title: yup
    .string("Enter your First Name")
    .max(15, "Must be 15 characters or less")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .max(15, "Must be 15 characters or less")
    .required("Last Name is required"),
  scheduleDate: yup.date("Enter your Birthday").required("Birthday required"),
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

export const UpdateAppointmentForm = (props) => {
  const [saved, setsaved] = React.useState({});

  let formSubmit = props.submit;

  let savedValues = props.savedValues ? props.savedValues : {};

  React.useEffect(() => {
    if (savedValues) {
      setsaved({
        title: savedValues.title,
        status: savedValues.status,
        scheduleDate: savedValues.scheduleDate,
      });
    }
  }, [savedValues]);

  const handleSubmitForm = (values) => {
    console.log("mahesh", values);
    // formSubmit(values);
  };
  const formik = useFormik({
    initialValues: savedValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("in d form");
      //formSubmit(values);
    },
  });

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={saved}
        onSubmit={async (formsData, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // async request
          // --> if wanted to reset on submit: resetForm();
          console.log(formsData);
          setSubmitting(false);
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          setTouched,
        }) => (
          <Box
            component="form"
            onSubmit={(e) => {
              console.log("sub", e);
              e.preventDefault();
              handleSubmit(e);
            }}
            noValidate
            sx={{ mt: 5 }}
          >
            <TextField
              id="title"
              name="title"
              fullWidth
              required
              margin="normal"
              label="Title"
              autoComplete="title"
              value={values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                fullWidth
                label="Schedule Date"
                value={formik.values.scheduleDate}
                onChange={formik.handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Select
              id="status"
              name="status"
              margin="normal"
              value={formik.values.status}
              required
              fullWidth
              autoComplete="status"
              onChange={formik.handleChange}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            >
              <MenuItem value={"pending"}>Pending</MenuItem>
              <MenuItem value={"scheduled"}>Scheduled</MenuItem>
              <MenuItem value={"completed"}>Completed</MenuItem>
              <MenuItem value={"rejected"}>Rejected</MenuItem>
            </Select>{" "}
            *
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
            <br />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Save
            </Button>
          </Box>
        )}
      />
    </div>
  );
};
