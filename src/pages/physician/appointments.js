import { Box, Container, Typography } from "@mui/material";

import Page from "../../shared/Page";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { appointmentsActions } from "../../redux-store/actions";
import React, { useEffect } from "react";

export const PhysicianManageAppointments = () => {
  return (
    <Page title="Physician | Appointments">
      <Container maxWidth="xl">
        <Box sl={{ pb: 5 }}>
          <Typography variant="h4">
            Hi, Welcome to Physican Appointments
          </Typography>
        </Box>
      </Container>
    </Page>
  );
};
