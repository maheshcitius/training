import { Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PageHeader from "../../shared/PageHeader";
import Page from "../../components/Page";
import { getCurrentUser } from "../../services/users.server";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { appointmentsActions } from "../../redux-store/actions";
import { AppointmentForm } from "../../shared/AppointmentForm";
import moment from "moment";
import React from "react";
import EventSchedular from "../../shared/events";
const theme = createTheme();

export const PatientScheduleAppointments = () => {
  const dispatch = useDispatch();

  const { addAppointment, getAppointments } = bindActionCreators(
    appointmentsActions,
    dispatch
  );

  React.useEffect(() => {
    debugger;
    getAppointments();
  }, []);

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
      console.log("Success");
    });
  };
  return (
    <Page title="Patient  | Schedule Appointment">
      <PageHeader
        title="Appointment"
        subTitle="Schedule Appointment"
        icon={<ScheduleIcon fontSize="large" />}
      />

      <Container maxWidth="xs">
        <AppointmentForm submit={handleSubmit} />
      </Container>
    </Page>
  );
};
