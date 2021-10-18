import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Box, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from '@mui/material/Container';

const validationSchema = yup.object({
  vaccineType: yup
    .string("Select the Vaccine Type")
    .min(1, "please select Vaccine Type")
    .required("Vaccine Type is required"),
  vaccineName: yup
    .string("Enter the Vaccine Name")
    .max(15, "Must be 15 characters or less")
    .required("Vaccine Name is required"),
  noOfDoses: yup
    .string("Enter the number of doses")
    .required("Dose number is required"),
  vaccinatedOn: yup.date("Vaccinated On").required("Date of Vaccination required"),
});

const ImmunizationForm = ({handleSubmit}) => {
  //let formSubmit = props.submit;
  const formik = useFormik({
    initialValues: {
      vaccineType: "",
      vaccineName: "",
      noOfDoses: "",
      vaccinatedOn: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
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
            </Select>
            <TextField
              id="vaccineName"
              name="vaccineName"
              fullWidth
              required
              margin="normal"
              label="Vaccine Name"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.vaccineName}
              onChange={formik.handleChange}
              error={formik.touched.vaccineName && Boolean(formik.errors.vaccineName)}
              helperText={formik.touched.vaccineName && formik.errors.vaccineName}
            />
            <TextField
              id="noOfDoses"
              name="noOfDoses"
              fullWidth
              required
              margin="normal"
              label="Number of Doses"
              autoComplete=""
              autoFocus
              variant="standard"
              value={formik.values.noOfDoses}
              onChange={formik.handleChange}
              error={formik.touched.noOfDoses && Boolean(formik.errors.noOfDoses)}
              helperText={formik.touched.noOfDoses && formik.errors.noOfDoses}
            />
            <TextField
              fullWidth
              margin="normal"
              id="vaccinatedOn"
              name="vaccinatedOn"
              required
              label="Vaccinated On"
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
            <br/>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Save
            </Button>
          </Box>
      </Container>    
  );
};

export default ImmunizationForm;
