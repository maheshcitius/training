import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Box, Button } from "@mui/material";
// import { TimePicker } from "@material-ui/pickers";

const validationSchema = yup.object({
  physicianName: yup
    .string("Enter the Physician Name")
    .max(15, "Must be 15 characters or less")
    .required("Physician Name is required"),
  title: yup
    .string("Enter your Title")
    .max(15, "Must be 15 characters or less")
    .required("Title is required"),
  doa: yup.date("Enter your Date of Appointment")
  .required("Date of appointment is required"),
  time:yup.date("Enter your Time of Appointment")
  .required("Time  of appointment is required"),
});

export const AppointmentForm = (props) => {
  let formSubmit = props.submit;
  const formik = useFormik({
    initialValues: {
      physicianName: " ",
      title: "",
      doa: "",
    //   time:''
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
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
          id="physicianName"
          name="physicianName"
          fullWidth
          required
          margin="normal"
          label="Physician Name"
          autoComplete="physicianName"
          variant="standard"
          value={formik.values.physicianName}
          onChange={formik.handleChange}
          error={formik.touched.physicianName && Boolean(formik.errors.physicianName)}
          helperText={formik.touched.physicianName && formik.errors.physicianName}
        />
        <TextField
          id="title"
          name="title"
          fullWidth
          required
          margin="normal"
          label="Title"
          autoFocus
          autoComplete="title"
          variant="standard"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          margin="normal"
          id="doa"
          name="doa"
          required
          label="Date of Appointment"
          variant="standard"
          autoFocus
          autoComplete="doa"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.doa}
          onChange={formik.handleChange}
          error={formik.touched.doa && Boolean(formik.errors.doa)}
          helperText={formik.touched.doa && formik.errors.doa}
        />     
      {/* <TimePicker
        fullWidth
        margin="normal"
        id="time"
        name="time"
        clearable
        ampm={false}
        required
        autoFocus
        autoComplete=""
        label="Time of Appointment"
        value={formik.values.time}        
        onChange={formik.handleDateChange}
        error={formik.touched.time && Boolean(formik.errors.time)}
          helperText={formik.touched.time && formik.errors.time}
      /> */}
       
        <br />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};
