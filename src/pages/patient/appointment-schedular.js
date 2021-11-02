import { Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PageHeader from "../../shared/PageHeader";
import Page from "../../components/Page";
import { getCurrentUser } from "../../services/users.server";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { appointmentsActions } from "../../actions";
import { AppointmentForm } from "../../shared/AppointmentForm";
import moment from "moment";

//import EventSchedular from '../../shared/events'

const theme = createTheme();

export const PatientScheduleAppointments = () => {
  const dispatch = useDispatch();

  const { addAppointment } = bindActionCreators(appointmentsActions, dispatch);

  const handleSubmit = (values) => {
    let title = localStorage.getItem("_title")
      ? localStorage.getItem("_title")
      : "";
    let date = localStorage.getItem("_scheduledDate")
      ? localStorage.getItem("_scheduledDate")
      : "";
    var userInfo = getCurrentUser();
    addAppointment({
      physicianName: values.physicianName.label,
      physicianId: values.physicianName.value.split("-")[1],
      patientId: userInfo.user.id,
      title: title,
      scheduledDate: moment(date).format("YYYY-MM-DD"),
      scheduledTime: moment(date).format("hh:mm A"),
      status: "pending",
      isAccepted: false,
    });
  };
  return (
    <Page title="Patient  | Schedule Appointment">
      <PageHeader
        title="Appointment"
        subTitle="Schedule Appointment"
        icon={<ScheduleIcon fontSize="large" />}
      />

      <Container>
        <AppointmentForm submit={handleSubmit} />
      </Container>
    </Page>
  );
};
