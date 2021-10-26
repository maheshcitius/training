import React from 'react';
import ReactDOM from 'react-dom';
// material
import {
    Stack,
  Box,
  Button,
  TextField,
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const initialValues = {
    procedureCode:"",
    diagnosisCode:"",
    allergies:"",

  medications:[{
      drugName:'',
      drugStrength:'',
      directions:''
  }],
};

export const InviteFriends = () => (
  <div>
    <h1>Invite friends</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="medications">
            {({ insert, remove, push }) => (
              <div>
                {values.medications.length > 0 &&
                  values.medications.map((medi, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        
                     <Field
                          name={`medications.${index}.drugName`}
                          placeholder="Jane Doe"
                          type="text"
                        /> 
                          
                       
                      </div>
                      <div className="col">
                        
                        <Field
                          name={`medications.${index}.drugStrength`}
                          placeholder="Jane Doe"
                          type="text"
                        />
                       
                      </div>
                      <div className="col">
                        
                        <Field
                          name={`medications.${index}.directions`}
                          placeholder="jane@acme.com"
                          type="text"
                        />
                        
                      </div>
                      <div className="col">
                       
                      <Button
                         type="button"
                         onClick={() => remove(index)} // remove a friend from the list
                       >
                         Remove Medication
                       </Button>
                      </div>
                    </div>
                  ))}
                
                <Button type="button" onClick={() => push({ drugName: '', drugStrength: '' ,directions:''})} >
                     {/* show this when user has removed all friends from the list */}
                     Add Medication
                   </Button>
              </div>
            )}
          </FieldArray>
          <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          
        >
         Save
        </Button>
        </Form>
      )}
    </Formik>
  </div>
);

