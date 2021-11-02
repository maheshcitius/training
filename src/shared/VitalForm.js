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

// const validationSchema = yup.object({
//   vaccineType: yup
//     .string("Select the Vaccine Type")
//     .min(1, "please select Vaccine Type")
//     .required("Vaccine Type is required"),
//   bloodPressure: yup
//     .string("Enter the Blood Pressure")
//     .max(15, "Must be 15 characters or less")
//     .required("Blood Pressure is required"),
//   noOfDoses: yup
//     .string("Enter the number of doses")
//     .required("Dose number is required"),
//   vaccinatedOn: yup.date("Vaccinated On").required("Date of Vaccination required"),
// });

const validationSchema = yup.object({
  bloodPressure: yup
    .string("Enter the Blood Pressure")
    .max(15, "Must be 15 characters or less")
    .required("Blood Pressure is required"),
  pulse: yup
    .string("Enter the Pulse")
    .max(15, "Must be 15 characters or less")
    .required("Pulse is required"),
  temprature: yup
    .string("Enter the Temprature")
    .max(15, "Must be 15 characters or less")
    .required("Temprature is required"),
  respiration: yup
    .string("Enter the Respiration")
    .max(15, "Must be 15 characters or less")
    .required("Respiration is required"),
  weight: yup
    .string("Enter the Weight")
    .max(15, "Must be 15 characters or less")
    .required("Weight is required"),
});

const Input = styled("input")({
  display: "none",
});

const VitalForm = (props) => {
  let formSubmit = props.submit;

  const [isExist, setisExist] = useState(0);
  let savedValues = props.savedValues?.length > 0 ? props.savedValues[0] : {};

  useEffect(() => {
    if (props.savedValues?.length > 0) {
      setisExist(1);
    }
  }, []);

  console.log("saved values", savedValues);

  const hs = (values) => {
    formSubmit(values, isExist);
  };

  const formik = useFormik({
    initialValues: {
      bloodPressure: savedValues?.bloodPressure
        ? savedValues.bloodPressure
        : "",
      pulse: savedValues?.pulse ? savedValues.pulse : "",
      temprature: savedValues?.temparature ? savedValues.temparature : "",
      respiration: savedValues?.respiration ? savedValues.respiration : "",
      weight: savedValues?.weight ? savedValues.weight : "",
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
          id="bloodPressure"
          fullWidth
          margin="normal"
          label="Blood Pressure"
          autoComplete=""
          autoFocus
          variant="standard"
          size="small"
          {...getFieldProps("bloodPressure")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end"></IconButton>
            </InputAdornment>
          }
          error={Boolean(touched.bloodPressure && errors.bloodPressure)}
          helperText={touched.bloodPressure && errors.bloodPressure}
        />
        <TextField
          id="pulse"
          fullWidth
          margin="normal"
          label="Pulse"
          autoComplete=""
          autoFocus
          size="small"
          variant="standard"
          {...getFieldProps("pulse")}
          error={Boolean(touched.pulse && errors.pulse)}
          helperText={touched.pulse && errors.pulse}
        />
        <TextField
          id="temprature"
          fullWidth
          margin="normal"
          label="Temprature"
          autoComplete=""
          autoFocus
          size="small"
          variant="standard"
          {...getFieldProps("temprature")}
          error={Boolean(touched.temprature && errors.temprature)}
          helperText={touched.temprature && errors.temprature}
        />
        <TextField
          id="respiration"
          fullWidth
          margin="normal"
          label="Respiration"
          autoComplete=""
          autoFocus
          size="small"
          variant="standard"
          {...getFieldProps("respiration")}
          error={Boolean(touched.respiration && errors.respiration)}
          helperText={touched.respiration && errors.respiration}
        />

        <TextField
          id="weight"
          name="weight"
          fullWidth
          margin="normal"
          label="Weight"
          autoFocus
          size="small"
          variant="standard"
          {...getFieldProps("weight")}
          error={Boolean(touched.weight && errors.weight)}
          helperText={touched.weight && errors.weight}
        />

        <br />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Save
        </Button>
      </Box>
    </FormikProvider>
  );
};

export default VitalForm;
