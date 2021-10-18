import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';

//import Page from '../../shared/Page';
import {
  Outlet
} from 'react-router-dom';
import HomeLayout from '../../shared/HomeLayout';
// components
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';


export const PatientDashboard = () => {
  return (
    <>
         
         <Page title="User | Minimal-UI">
      <Container>
        

        <Card>
         
          <Scrollbar>

          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New User
          </Button>
        </Stack>
          </Scrollbar>

</Card>
</Container>
</Page>
         
                
    </>
    
  )
};
