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
import { useNavigate } from "react-router";
const theme = createTheme();

export const PhysicianScheduleAppointments = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.allUsers);

  const navigator = useNavigate();
  const { addAppointment, getAppointments } = bindActionCreators(
    appointmentsActions,
    dispatch
  );

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
      patientName: values?.patientName?.label,
      physicianId: values.physicianName.value.split("-")[1],
      patientId: values?.patientName?.value,
      title: title,
      scheduleDate: moment(date).format("YYYY-MM-DD"),
      scheduleTime: moment(date).format("hh:mm A"),
      status: "scheduled",
      visitType: "online",
      isAccepted: false,
      createdBy: userInfo?.user?.id,
    };

    addAppointment(payload);
    navigator(-1);
  };
  return (
    <Page title="Physician | Schedule Appointment">
      <PageHeader
        title="Appointments"
        subTitle="Schedule Appointment"
        icon={<ScheduleIcon fontSize="large" />}
      />
      <Container component="main" maxWidth="xs">
        <AppointmentForm submit={handleSubmit} />
      </Container>
    </Page>
  );
};
