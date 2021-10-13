import { Box , Container, Typography,TextField,Item,Button} from '@mui/material';
import { getThemeProps } from '@mui/system';
import { useRef } from 'react';
import DropDown from '../../shared/DropDown';

import Page from '../../shared/Page';

const FormField = (props) => {

  const onSubmit =()=>{
      console.log(dataRef.current.value)
  }
    let dataRef = useRef()
    return (
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 4">
        <h6 style={{margin: 20}}>{props.name}</h6>
      </Box>

      <Box gridColumn="span 6">
      { props.name == "Current Medication" 
      ? <DropDown name = "Current Medication" data = {["RSvs", "somedata"]} />
      :
       <TextField id="standard-basic" label="Standard" variant="standard"
        fullWidth
          margin="normal"
          id="email"
          name= {props.name}
          label={props.name}
          size ="small"
          ref = {dataRef}
          />}
        </Box>
        <Box gridColumn="span 2">
        <Button  style={{margin: 20}} onClick = {()=>onSubmit()} >Save</Button>
        </Box>
      </Box>

    )
}


export const PatientMedicationsAndAllergies = () => {
  
    return (
        <Page title="Patient | Medications And Allergies">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5,pt:5 }}>
            <Typography variant="h5">Patient Medications And Allergies</Typography>
            <Box component="form" noValidate sx={{ mt: 5 }}>

        <FormField name= "Current Medication" />
        <FormField name= "OTC(Over the counter) Medication" />
        <FormField name= "Herbs/ Vitamins/ Minerals/ Antibiotics" />
        <FormField name= "Social drugs" />
        <FormField name= "Any Past prescribed medications" />
        <FormField name= "drug-allergies" />
        <FormField name= "Other allergies" />
      
          
          </Box>
          </Box>
          </Container>
          </Page>
  )
    

};
