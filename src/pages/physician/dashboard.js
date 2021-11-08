// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../../components/Page";
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
} from "../../components/_dashboard/app";

import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { userActions } from "../../redux-store/actions";

//import { appointmentsActions } from '../../actions';
import { appointmentsActions } from "../../redux-store/actions";

// ----------------------------------------------------------------------

export default function DashboardPhysician() {
  const dispatch = useDispatch();
  dispatch(appointmentsActions.getAppointments());
  //dispatch(userActions.getAllUsers());

  return (
    <Page title="Dashboard | Physician">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid> */}

          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppWebsiteVisits /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
