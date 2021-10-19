import { Box , Container, Typography,TextField,Item,Button} from '@mui/material';
import { getThemeProps,grid } from '@mui/system';
import { useRef,useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { medicationAllergyActions } from '../../../actions/medicationAllergy.action'


import { useFormik } from "formik";
import * as yup from "yup";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Page from '../../../shared/Page';
import { Modal } from '@mui/material';
import { FormField } from '../FormField';

export const GetMedications = (props)=>{

    useEffect(() => {
        // Update the document title using the browser API
       return getData()
      
      },[])
    
  const dispatch = useDispatch();

  const MedicationInfo = useSelector((state) => state.medication.medicationData);

  const { getMedicationData } = bindActionCreators(medicationAllergyActions, dispatch);

  function getData() {
    dispatch(medicationAllergyActions.getAll());
  }
  
  let formSubmit = props.submit;
     const formik = useFormik({
    initialValues: {
      currentMedication: "",
      medicationDetail: "",
      otcMedication : "",
     otherAllergies :  "",
     HVMA :  MedicationInfo.HVMA,
     drugAllergies  :  MedicationInfo.drugAllergies,
     SocialDrugs :  MedicationInfo.socialDrugs,
     pastMedication  :   MedicationInfo.pastMedication

    },
   
    onSubmit: (values) => {
      formSubmit(values);
    },
  });

  return (  <Box
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
        
         { MedicationInfo.medications && MedicationInfo.medications.map((d,i)=>
           <MenuItem key ={i} value={d.drugName} name= {d.drugName}>
           {d.drugName} & {d.drugStrength}
          </MenuItem>
             )
        }) 
        
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

        {/* {MedicationInfo.map((d,i)=> 
        return )} */}
        <FormField name = "Herbs /Vitamins /Minerals /Antibiotics">
        <TextField
          id="HVMA"
          name="HVMA"
          fullWidth
          margin="normal"
          // label="Herbs/Vitamins/Minerals/Antibiotics"
          autoComplete=""
          autoFocus
          variant="standard"
          value={MedicationInfo.HVMA}
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
)}