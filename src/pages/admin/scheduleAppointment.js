import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Card } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PageHeader from "../../shared/PageHeader";
import Page from "../../components/Page";
import { getCurrentUser } from "../../services/users.server";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { appointmentsActions, userActions } from "../../redux-store/actions";
import { AppointmentForm } from "../../shared/AppointmentForm";
import moment from "moment";
import React from "react";
import EventSchedular from "../../shared/events";
import { SA } from "../../shared/ScheduleAppointmentForm";
const theme = createTheme();

export const AdminScheduleAppointments = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.allUsers);

  const { addAppointment, getAppointments } =
    bindActionCreators(appointmentsActions);

  const handleSubmit = (values) => {
    debugger;
    let title = localStorage.getItem("_title")
      ? localStorage.getItem("_title")
      : "";
    let date = localStorage.getItem("_scheduledDate")
      ? localStorage.getItem("_scheduledDate")
      : "";
    var userInfo = getCurrentUser();

    let payload = {
      physicianName: values.physicianName.label,
      patientName: userInfo.user?.firstname,
      physicianId: values.physicianName.value.split("-")[1],
      patientId: userInfo.user.id,
      title: title,
      scheduleDate: moment(date).format("YYYY-MM-DD"),
      scheduleTime: moment(date).format("hh:mm A"),
      status: "pending",
      visitType: "online",
      isAccepted: false,
    };

    addAppointment(payload, (ap) => {
      console.log("ap cb");
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Page title="Schedule Appointment">
        <PageHeader
          title="Appointments"
          subTitle="Manage Patient Appointments"
          icon={<ScheduleIcon fontSize="large" />}
        />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Card>
            <AppointmentForm submit={handleSubmit} />
          </Card>
        </Container>
      </Page>
    </ThemeProvider>
  );
};
