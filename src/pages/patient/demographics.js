import React,{useEffect} from 'react'
import { Box , Container, Typography } from '@mui/material';
import Page from '../../shared/Page';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { demographicActions } from '../../actions'


export const PatientDemographics = () => {
  const dispatch = useDispatch();
  const { getAllDemographics } = bindActionCreators(demographicActions, dispatch);

  useEffect(()=>{
      getAllDemographics();
  },[])
  
    return (
        <Page title="Patient | Dashboard">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Demographics</Typography>
          </Box>
          </Container>
          </Page>
  )
    

};
