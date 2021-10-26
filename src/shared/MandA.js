import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider , FieldArray} from 'formik';
import React from 'react';
import * as yup from 'yup';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Card, Container ,Button } from '@mui/material';
import { InviteFriends } from './temp';

// material
import {
    Stack,
  Box,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

  const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 680,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
  }));

export const  MandA =(props)=> {
  //const navigate = useNavigate();
  
    let formSubmit = props.submit;
  
    const [val, setVal] = useState('')

  const formik = useFormik({
    initialValues: {
        procedureCode:"",
        diagnosisCode:"",
        allergies:"",

      medications:[{
          drugName:'',
          drugStrength:'',
          directions:''
      }],
     
    },
    onSubmit: (values) => {
        console.log("values",values)
      //formSubmit(values)
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  
  return (
    <Container maxWidth="lg">
    <ContentStyle>
    <Card className="w-100">

        <InviteFriends/>

    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    >
       
       <Stack spacing={3}>
          <TextField
            fullWidth
            className="w-100"
            type="text"
            label="Procedure Code"
            {...getFieldProps('procedureCode')}
            size="small"
          />

          <TextField
            fullWidth
            className="w-100"
            size="small"
            label="Diagnosis Code"
            {...getFieldProps('diagnosisCode')}
            
          
          />
          
          <TextField
            fullWidth
            className="w-100"
            size="small"
            label="Allergies"
            {...getFieldProps('allergies')}
            
          
          />
        </Stack>

       
        

        <Divider light />
           <FieldArray
             name="medications"
             render={({ insert, remove, push }) => (
               <div>


                 { values.medications.length > 0 && (
                   values.medications.map((item, index) => (
                     <div key={index}>
                     
                    
                       <TextField
          label="drugName"
          name={`medications.${index}.drugName`}
          id={`drugName.${index}.name`}
          placeholder="drug name"
          size="small"
         
        /> 
           <TextField
          label="drugStrength"
          name={`medications.${index}.drugStrength`}
          size="small"
          placeholder="Strength"
         id={`drugStrength.${index}.name`}
        />
        <TextField
          label="directions"
          name={`medications.${index}.directions`}
          size="small"
          placeholder="direction"
         
        />
        
         <div>
         <Divider light />
        </div> 

                       <Button
                         type="button"
                         onClick={() => remove(index)} // remove a friend from the list
                       >
                         Remove Medication
                       </Button>
                       
                     </div>
                     
                   ))
                 )}
                
                 
                <Button type="button" onClick={() => push({ drugName: '', drugStrength: '' ,directions:''})} >
                     {/* show this when user has removed all friends from the list */}
                     Add Medication
                   </Button>
                 
               </div>
             )}
           />
        
      
    </Box>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          
        >
         Save
        </LoadingButton>
      </Form>
    </FormikProvider>
    </Card>
    </ContentStyle>
      </Container>
  );
}
