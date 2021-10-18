import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Box, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

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
    height: yup
      .string("Enter the Height")
      .max(15, "Must be 15 characters or less")
      .required("Height is required"),
    weight: yup
      .string("Enter the Weight")
      .max(15, "Must be 15 characters or less")
      .required("Weight is required"),
    procedureCode: yup
      .string("Enter the Procedure Code")
      .max(15, "Must be 15 characters or less")
      .required("Procedure Code is required"),
    diagnosisCode: yup
      .string("Enter the Diagnosis Code")
      .max(15, "Must be 15 characters or less")
      .required("Diagnosis Code is required"),
    labReport: yup
      .string("Enter the Lab Report")
      .max(15, "Must be 15 characters or less")
      .required("Lab Report is required"),
    radiologyReport: yup
      .string("Enter the Radiology Report")
      .max(15, "Must be 15 characters or less")
      .required("Radiology Report is required"),
    medication: yup
      .string("Enter the Medication")
      .max(15, "Must be 15 characters or less")
      .required("Medication is required")
  });

const Input = styled('input')({
    display: 'none',
});  



const VitalForm = (props) => {
  let formSubmit = props.submit;
  const formik = useFormik({
    initialValues: {
      bloodPressure: '',
      pulse: '',
      temprature: '',
      respiration: '',
      height: '',
      weight: '',
      procedureCode: '',
      diagnosisCode: '',
      labReport: '',
      radiologyReport: '',
      medication: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formSubmit(values);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 5 }}
            display="flex"
            flexDirection="column"
            alignItem= 'center'
            justifyContent='center'
            padding= "10"
          > 
            <TextField
              id="bloodPressure"
              name="bloodPressure"
              fullWidth
              required
              margin="normal"
              label="Blood Pressure"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.bloodPressure}
              onChange={formik.handleChange}
              error={formik.touched.bloodPressure && Boolean(formik.errors.bloodPressure)}
              helperText={formik.touched.bloodPressure && formik.errors.bloodPressure}
            />
            <TextField
              id="pulse"
              name="pulse"
              fullWidth
              required
              margin="normal"
              label="Pulse"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.pulse}
              onChange={formik.handleChange}
              error={formik.touched.pulse && Boolean(formik.errors.pulse)}
              helperText={formik.touched.pulse && formik.errors.pulse}
            />
            <TextField
              id="temprature"
              name="temprature"
              fullWidth
              required
              margin="normal"
              label="Temprature"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.temprature}
              onChange={formik.handleChange}
              error={formik.touched.temprature && Boolean(formik.errors.temprature)}
              helperText={formik.touched.temprature && formik.errors.temprature}
            />
            <TextField
              id="respiration"
              name="respiration"
              fullWidth
              required
              margin="normal"
              label="Respiration"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.respiration}
              onChange={formik.handleChange}
              error={formik.touched.respiration && Boolean(formik.errors.respiration)}
              helperText={formik.touched.respiration && formik.errors.respiration}
            />
            <TextField
              id="height"
              name="height"
              fullWidth
              required
              margin="normal"
              label="Height"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.height}
              onChange={formik.handleChange}
              error={formik.touched.height && Boolean(formik.errors.height)}
              helperText={formik.touched.height && formik.errors.height}
            />
            <TextField
              id="weight"
              name="weight"
              fullWidth
              required
              margin="normal"
              label="Weight"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.weight}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              helperText={formik.touched.weight && formik.errors.weight}
            />
            <TextField
              id="procedureCode"
              name="procedureCode"
              fullWidth
              required
              margin="normal"
              label="Procedure Code"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.procedureCode}
              onChange={formik.handleChange}
              error={formik.touched.procedureCode && Boolean(formik.errors.procedureCode)}
              helperText={formik.touched.procedureCode && formik.errors.procedureCode}
            />
            <TextField
              id="diagnosisCode"
              name="diagnosisCode"
              fullWidth
              required
              margin="normal"
              label="Diagnosis Code"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.diagnosisCode}
              onChange={formik.handleChange}
              error={formik.touched.diagnosisCode && Boolean(formik.errors.diagnosisCode)}
              helperText={formik.touched.diagnosisCode && formik.errors.diagnosisCode}
            />
            {/* <TextField
              id="labReport"
              name="labReport"
              fullWidth
              required
              margin="normal"
              label="Lab Report"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.labReport}
              onChange={formik.handleChange}
              error={formik.touched.labReport && Boolean(formik.errors.labReport)}
              helperText={formik.touched.labReport && formik.errors.labReport}
            /> */}
            <label htmlFor="labReport"
                sx= {{
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 1 
                }}
            >
              <label for="labReport">
                 Lab Report
              </label>
              <Input 
                id="labReport" 
                multiple type="file" 
                name="labReport"
                fullWidth
                required
                margin="normal"
                label="Lab Report"
                autoComplete=""
                autoFocus
                variant="standard"
                value={formik.values.labReport}
                onChange={formik.handleChange}
                error={formik.touched.labReport && Boolean(formik.errors.labReport)}
                helperText={formik.touched.labReport && formik.errors.labReport}
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
            <TextField
              id="radiologyReport"
              name="radiologyReport"
              fullWidth
              required
              margin="normal"
              label="Radiology Report"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.radiologyReport}
              onChange={formik.handleChange}
              error={formik.touched.radiologyReport && Boolean(formik.errors.radiologyReport)}
              helperText={formik.touched.radiologyReport && formik.errors.radiologyReport}
            />
            <TextField
              id="medication"
              name="medication"
              fullWidth
              required
              margin="normal"
              label="Medication"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.medication}
              onChange={formik.handleChange}
              error={formik.touched.medication && Boolean(formik.errors.medication)}
              helperText={formik.touched.medication && formik.errors.medication}
            />

            {/* <TextField
              fullWidth
              margin="normal"
              id=""
              name="temprature"
              required
              label="Temprature"
              variant="standard"
              autoFocus
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.vaccinatedOn}
              onChange={formik.handleChange}
              error={formik.touched.vaccinatedOn && Boolean(formik.errors.vaccinatedOn)}
              helperText={formik.touched.vaccinatedOn && formik.errors.vaccinatedOn}
            />
            <label for="vaccineType">
              Vaccine Type
            </label>
            <Select
              id="vaccineType"
              name="vaccineType"
              margin="normal"
              value={formik.values.vaccineType}
              required
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              error={formik.touched.vaccineType && Boolean(formik.errors.vaccineType)}
              helperText={formik.touched.vaccineType && formik.errors.vaccineType}
            >
              <MenuItem value={"Select Gender"} name="gender">
                Select Vaccine Type
              </MenuItem>
              <MenuItem value={"COVID-19"} name="COVID-19">
                COVID-19
              </MenuItem>
              <MenuItem value={"Others"} name="Others">
                Others
              </MenuItem>
            </Select> */}
            <br/>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Save
            </Button>
          </Box>
      </Container>    
  );
};

export default VitalForm;
