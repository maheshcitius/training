import { Box , Container, Typography,TextField,Item,Button} from '@mui/material';
import { useEffect,useState} from 'react';
import * as yup from "yup";
import { Modal } from '@mui/material';
import { GetMedications } from '../../components/Patients/MedicationAllergyComp/GetMedication';
import { AddMedication } from '../../components/Patients/MedicationAllergyComp/AddMedication';




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


  return (
    <div>
      
     {/* {console.log(formik.values.otherAllergies)} */}
          <GetMedications />
     
            <AddMedication/>
      
    </div>
  );
      
 
     
    

};
