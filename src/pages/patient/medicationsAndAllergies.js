import { Box , Container, Typography,TextField,Item,Button} from '@mui/material';
import { getThemeProps,grid } from '@mui/system';
import { useRef } from 'react';
import DropDown from '../../shared/DropDown';

import { useFormik } from "formik";
import * as yup from "yup";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Page from '../../shared/Page';

const FormField = (props) => {

  const onSubmit =()=>{
      console.log(dataRef.current.value)
  }
    let dataRef = useRef()
    return (
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" >
        <Box gridColumn="span 4" textAlign= "center" alignSelf="center" marginTop="8%">
        <h5 >{props.name}</h5>
        </Box>
        <Box gridColumn="span 6">
          {props.children}
         {/* <TextField id="standard-basic" label="Standard" variant="standard"
        fullWidth
          margin="normal"
          id="email"
          name= {props.name}
          label={props.name}
          size ="small"
          ref = {dataRef}
          /> */}
        </Box>
      
      </Box>

    )
}

const validationSchema = yup.object({
  currentMedication: yup
    .string("Select the Current Medication")
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


export const PatientMedicationsAndAllergies = (props) => {
  
  let formSubmit = props.submit;
     const formik = useFormik({
    initialValues: {
      currentMedication: "",
      medicationDetail: "",
      otcMedication : "",
     otherAllergies : "",
     HVMA : "",
     drugAllergies  :"",
     SocialDrugs : "",
     pastMedication  :""

    },
    validationSchema: validationSchema,
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
        // sx={{ mt: 5 }}
      >
        <FormField name = "Current Medication" >
        <Select
          id="currentMedication"
          name="currentMedication"
          margin="normal"
          value={formik.values.currentMedication}
          required
          fullWidth
          variant="standard"
          onChange={formik.handleChange}
          error={formik.touched.currentMedication && Boolean(formik.errors.currentMedication)}
          helperText={formik.touched.currentMedication && formik.errors.currentMedication}
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
       </FormField>

        <FormField name ="Medication Detail">
        <TextField 
          id="medicationDetail"
          name="medicationDetail"
          fullWidth
          margin="normal"
          label="Medication Detail"
          autoComplete=""
          autoFocus
          variant="standard"
          value={formik.values.medicationDetail}
          onChange={formik.handleChange}
          error={formik.touched.medicationDetail && Boolean(formik.errors.medicationDetail)}
          helperText={formik.touched.medicationDetail && formik.errors.medicationDetail}
        />
         </FormField>
         <FormField name= "OTC(Over the Counter  medication)">
        <TextField
          id="otcMedication"
          name="otcMedication"
          fullWidth
          margin="normal"
          label="OTC(Over the Counter  medication)"
          autoComplete=""
          autoFocus
          variant="standard"
          value={formik.values.otcMedication}
          onChange={formik.handleChange}
          error={formik.touched.otcMedication && Boolean(formik.errors.otcMedication)}
          helperText={formik.touched.otcMedication && formik.errors.otcMedication}
        />
        </FormField>
        <FormField name = "Herbs /Vitamins /Minerals /Antibiotics">
        <TextField
          id="HVMA"
          name="HVMA"
          fullWidth
          margin="normal"
          label="Herbs/Vitamins/Minerals/Antibiotics"
          autoComplete=""
          autoFocus
          variant="standard"
          value={formik.values.HVMA}
          onChange={formik.handleChange}
          error={formik.touched.HVMA && Boolean(formik.errors.HVMA)}
          helperText={formik.touched.HVMA && formik.errors.HVMA}
        />
        </FormField>
        <FormField name= "Social Drugs" >
        <TextField
          id="SocialDrugs"
          name="SocialDrugs"
          fullWidth
          margin="normal"
          label="Social Drugs"
          autoComplete=""
          autoFocus
          variant="standard"
          value={formik.values.SocialDrugs}
          onChange={formik.handleChange}
          error={formik.touched.SocialDrugs && Boolean(formik.errors.SocialDrugs)}
          helperText={formik.touched.SocialDrugs && formik.errors.SocialDrugs}
        />
        </FormField>
        <FormField name= "Any Past Medication">
        <TextField
          id="pastMedication"
          name="pastMedication"
          fullWidth
          margin="normal"
          label="Any Past Medication"
          autoComplete=""
          autoFocus
          variant="standard"
          value={formik.values.pastMedication}
          onChange={formik.handleChange}
          error={formik.touched.pastMedication && Boolean(formik.errors.pastMedication)}
          helperText={formik.touched.pastMedication && formik.errors.pastMedication}
        />
        </FormField>
        <FormField name= "Drug-Allergies">
        <TextField
          id="drugAllergies"
          name="drugAllergies"
          fullWidth
          margin="normal"
          label="Drug-Allergies"
          autoComplete=""
          autoFocus
          variant="standard"
          value={formik.values.drugAllergies}
          onChange={formik.handleChange}
          error={formik.touched.drugAllergies && Boolean(formik.errors.drugAllergies)}
          helperText={formik.touched.drugAllergies && formik.errors.drugAllergies}
        />
        </FormField>
        <FormField name= "Other allergies" >
        <TextField
          id="otherAllergies"
          name="otherAllergies"
          fullWidth
          margin="normal"
          label="Other allergies"
          autoComplete=""
          autoFocus
          variant="standard"
          value={formik.values.otherAllergies}
          onChange={formik.handleChange}
          error={formik.touched.otherAllergies && Boolean(formik.errors.otherAllergies)}
          helperText={formik.touched.otherAllergies && formik.errors.otherAllergies}
        />
        </FormField>
        
        <br/>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Save
        </Button>
      </Box>
    </div>
  );
      
          
     
    

};
