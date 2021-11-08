import { useLocation, useParams, useNavigate, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Person } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import scheduleFilled from "@iconify/icons-ant-design/schedule-filled";
import Popup from "../../../shared/Popup";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Grid,
  Card,
  Paper,
  Typography,
  Box,
  CardHeader,
  CardContent,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { valuesIn } from "lodash";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VitalForm from "../../../shared/VitalForm";
import BillingForm from "../../../shared/BillingForm";
import { diagnosissActions } from "../../../redux-store/actions";
import { appointmentsActions } from "../../../redux-store/actions";
import { MandA } from "../../../shared/MedicationsProceduresForm";
import { userInformation } from "../../../services";
import { orderActions } from "../../../redux-store/actions";

export const AppointmentDetails = (props) => {
  let location = useLocation();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = userInformation.getCurrentUser();

  let Appointments = useSelector((state) => state.appointments);
  let UserInformation = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  let { id } = useParams();
  const [appointments, setAppointments] = useState(Appointments.appointments);
  const [openVitalsPopup, setOpenVitalsPopup] = useState(false);
  const [openDiagnosisPopup, setopenDiagnosisPopup] = useState(false);
  const [openBillingPopup, setOpenBillingPopup] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [billingGenerated, setBillingGenerated] = useState(false);
  const [billingData, setBillingData] = useState({});

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentStatus, setAppointmentStatus] = useState("");

  console.log("Appointments in details comp", appointments);
  useEffect(() => {
    if (appointments.length > 0) {
      setData(
        appointments.find((appointment) => appointment.id.toString() === id)
      );
      //setAppointmentStatus('completed');
      setAppointmentStatus(
        appointments.find((appointment) => appointment.id.toString() === id)
          .status
      );
    }
  }, [appointments]);

  const purchaseProduct = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigator.push("/orders");
    }, 5000);
  };

  const recallApp = () => {
    dispatch(
      appointmentsActions.getAppointments((a) => {
        setAppointments(a);
      })
    );
  };
  const updateAppointment = (payload) => {
    dispatch(appointmentsActions.updateAppointment(id, payload));
  };
  const addMedications = (payload) => {
    dispatch(
      diagnosissActions.addDiagnosis(id, "medications", payload, (b) => {})
    );
  };
  const handleDiagnosisSubmit = (values) => {
    console.log("values in medicationdiagnosis", values);
    let appointmentPayload = {
      allergies: values?.allergies,
      diagnosisCode: values?.diagnosisCode,
      procedureCode: values?.procedureCode,
      physicianComments: values?.physicianComments,
      examinationSummary: values?.examinationSummary,
      diagnosisDate: new Date(),
      isAttended: true,
    };

    let medicationsPayload = values?.medications?.map((item) => {
      var temp = {};
      temp.directions = item.directions;
      temp.drugName = item.drugName;
      temp.drugStrength = item.drugStrength;
      temp.appointmentId = data?.id;
      temp.physicianId = data?.physicianId;
      temp.type = "appointment";
      temp.patientId = data?.patientId;

      return temp;
    });

    if (medicationsPayload.length >= 1) {
      medicationsPayload.map((item) => {
        addMedications(item);
      });
    }

    updateAppointment(appointmentPayload);
    setopenDiagnosisPopup(false);
    recallApp();
  };
  const handleVitalSubmit = (values, isExist) => {
    console.log("handle Vitals", values);
    debugger;
    let payload = {
      bloodPressure: values?.bloodPressure,
      pulse: values?.pulse,
      temparature: values?.temparature,
      respiration: values?.respiration,
      weight: values?.weight,
      createdBy: data?.physicianId,
      appointmentId: data?.id,
    };

    if (data.patientVitals?.length > 0) {
      let vitalId =
        data.patientVitals && data.patientVitals.length > 0
          ? data.patientVitals[0].id
          : "";

      dispatch(
        diagnosissActions.updateDiagnosis(vitalId, "patientVitals", payload)
      );
      recallApp();
    } else {
      dispatch(
        diagnosissActions.addDiagnosis(id, "patientVitals", payload, (b) => {
          console.log("vitals cb", b);
        })
      );
      recallApp();
    }

    setOpenVitalsPopup(false);
    //   navigator(-1);
  };

  const handleBillingSubmit = (values) => {
    debugger;
    let payload = {
      patientId: data.patientId,
      physicianId: data.physicianId,
      status: "pending",
      createdBy: UserInformation.user.id, //createdBy is adminId here
      amount: values.amount,
      description: values.description,
      physicianName: data.physicianName,
      appointmentTitle: data.title,
      appointmentScheduleDate: data.scheduleDate,
      appointmentScheduleTime: data.scheduleTime,
    };
    console.log("Payload-------------", payload);

    console.log("Submitted", values, data, UserInformation.user.id, id);

    dispatch(orderActions.postOrderDetails(data?.id, payload));

    console.log(payload);

    setBillingData(values);
    setBillingGenerated(true);
    setOpenBillingPopup(false);
    setButtonDisabled(true);
  };

  const BillingDetails = ({ appointmentStatus }) => {
    return (
      <>
        {appointmentStatus === "completed" ? (
          <Button
            onClick={() => setOpenBillingPopup(true)}
            disabled={buttonDisabled}
          >
            Proceed to bill customer
          </Button>
        ) : (
          <Typography>
            Please Enter all the details to proceed for Billing
          </Typography>
        )}
      </>
    );
  };

  const renderMedicaions = (items) => {
    return (
      <>
        {items?.map((item) => {
          return (
            <ul className="small" key={item.id}>
              <li>
                <p>DrugName : {item.drugName} </p>
              </li>
              <li>
                <p>Strength : {item.drugStrength} </p>
              </li>
              <li>
                {" "}
                <p> Directions: {item.directions} </p>
              </li>
              <Divider light />
            </ul>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Popup
        title=" Add Diagnosis Details"
        openPopup={openDiagnosisPopup}
        setOpenPopup={setopenDiagnosisPopup}
      >
        <MandA submit={handleDiagnosisSubmit} />
      </Popup>

      <Popup
        title="Add Vitals"
        openPopup={openVitalsPopup}
        setOpenPopup={setOpenVitalsPopup}
      >
        <VitalForm
          submit={handleVitalSubmit}
          savedValues={data?.patientVitals}
        />
      </Popup>
      <Popup
        title="Add Billing Price"
        openPopup={openBillingPopup}
        setOpenPopup={setOpenBillingPopup}
      >
        <BillingForm submit={handleBillingSubmit} />
      </Popup>

      {data && (
        <div className="product-detail-page">
          <Grid container xs={12} sm={12} md={12} spacing={2}>
            <Card className="w-100">
              <CardHeader title="Appointment Details" />

              <CardContent>
                <article className="card w-100">
                  <header className="card-header">
                    {data && data.title ? data.title : ""} - Id :
                    {data ? data.id : ""}
                  </header>
                  <div className="card-body">
                    <article className="card">
                      <div className="card-body row">
                        <div className="col">
                          {" "}
                          <strong>Appointment Date:</strong> <br />
                          29 nov 2019{" "}
                        </div>
                        <div className="col">
                          {" "}
                          <strong>Status:</strong> <br />
                          {data && data.status ? data.status : ""}
                        </div>
                        <div className="col">
                          {" "}
                          <strong>Physician:</strong> <br />
                          <Chip
                            avatar={
                              <Avatar>
                                {data && data.physicianName
                                  ? data.physicianName.charAt(0)
                                  : ""}
                              </Avatar>
                            }
                            label={data ? data.physicianName : ""}
                          />
                        </div>
                        <div className="col">
                          {" "}
                          <strong>Patient :</strong> <br />
                          <Chip
                            avatar={
                              <Avatar>
                                {data.patientName
                                  ? data.patientName.charAt(0)
                                  : ""}
                              </Avatar>
                            }
                            label={
                              data && data.patientName ? data.patientName : ""
                            }
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </article>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            className="mt-2 pt-2"
            container
            xs={12}
            sm={12}
            md={12}
            spacing={2}
          >
            <Card>
              <CardHeader title="Patient Vitals"></CardHeader>
              <CardContent>
                {user?.user?.role !== "patient" ? (
                  <Button onClick={() => setOpenVitalsPopup(true)}>
                    Add/Update Vitals{" "}
                    <Icon icon={scheduleFilled} width={14} height={14} />
                  </Button>
                ) : (
                  ""
                )}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Alert
                      icon={<CheckCircleOutlineIcon fontSize="inherit" />}
                      severity={
                        data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].temparature > 99 ||
                            data.patientVitals[0].temparature < 95
                            ? "error"
                            : "success"
                          : ""
                      }
                    >
                      <AlertTitle>Temparature</AlertTitle>

                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                      >
                        {data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].temparature
                          : ""}{" "}
                      </Typography>
                    </Alert>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Alert
                      icon={<CheckCircleOutlineIcon fontSize="inherit" />}
                      severity="warning"
                    >
                      <AlertTitle>Blood Pressure</AlertTitle>

                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                      >
                        {data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].bloodPressure
                          : ""}
                      </Typography>
                    </Alert>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Alert
                      icon={<CheckCircleOutlineIcon fontSize="inherit" />}
                      severity={
                        data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].pulse < 60 ||
                            data.patientVitals[0].pulse > 100
                            ? "error"
                            : "success"
                          : ""
                      }
                    >
                      <AlertTitle>Pulse </AlertTitle>

                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                      >
                        {data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].pulse
                          : ""}{" "}
                      </Typography>
                    </Alert>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Alert
                      icon={<CheckCircleOutlineIcon fontSize="inherit" />}
                      severity={
                        data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].respiration < 12 ||
                            data.patientVitals[0].respiration > 20
                            ? "error"
                            : "success"
                          : ""
                      }
                    >
                      <AlertTitle>Respiration</AlertTitle>

                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                      >
                        {data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].respiration
                          : ""}{" "}
                      </Typography>
                    </Alert>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            className="mt-2 pt-2"
            sx={{ with: "100%" }}
            container
            xs={12}
            sm={12}
            md={12}
            spacing={2}
          >
            <Card className="w-100">
              {user?.user?.role !== "patient" ? (
                <Button onClick={() => setopenDiagnosisPopup(true)}>
                  Add Diagnosis Details{" "}
                  <Icon icon={scheduleFilled} width={14} height={14} />
                </Button>
              ) : (
                ""
              )}

              <CardHeader title="Patient Diagnosis " />
              <CardContent>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Medications</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {renderMedicaions(data.medications ? data.medications : [])}
                  </AccordionDetails>{" "}
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Appointment Summary</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemText primary="Procedure Code" />
                        <Typography>
                          {data.diagnosisCode ? data.diagnosisCode : ""}{" "}
                        </Typography>
                      </ListItem>
                      <ListItem alignItems="flex-start">
                        <ListItemText primary="Diagnosis Code" />
                        <Typography>
                          {data.diagnosisCode ? data.diagnosisCode : ""}
                        </Typography>
                      </ListItem>
                      <ListItem alignItems="flex-start">
                        <ListItemText primary="Allergies" />
                        <Typography>
                          {data.allergies ? data.allergies : ""}
                        </Typography>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemText primary="Physician Comment" />
                        <Typography>
                          {data.physicianComments ? data.physicianComments : ""}
                        </Typography>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemText primary="Summary" />
                        <Typography>
                          {data.examinationSummary
                            ? data.examinationSummary
                            : ""}
                        </Typography>
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            className="mt-2 pt-2"
            sx={{ width: "100%", margin: "0px auto" }}
            container
            xs={12}
            sm={12}
            md={12}
            spacing={2}
          >
            {user?.user?.role !== "patient" ? (
              <Card>
                <BillingDetails appointmentStatus={appointmentStatus} />
              </Card>
            ) : (
              ""
            )}
          </Grid>

          {isLoading && <div className="overlay"></div>}
        </div>
      )}
    </>
  );
};
