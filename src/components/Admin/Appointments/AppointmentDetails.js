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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { valuesIn } from "lodash";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VitalForm from "../../../shared/VitalForm";
import { diagnosissActions } from "../../../redux-store/actions";

export const AppointmentDetails = (props) => {
  let location = useLocation();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  let Appointments = useSelector((state) => state.appointments);

  let { id } = useParams();
  const [appointments, setAppointments] = useState(Appointments.appointments);
  const [openVitalsPopup, setOpenVitalsPopup] = useState(false);

  console.log("Appointments in details comp", appointments);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (appointments.length > 0) {
      setData(
        appointments.find((appointment) => appointment.id.toString() === id)
      );
    }
  }, []);

  const purchaseProduct = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigator.push("/orders");
    }, 5000);
  };
  const handleVitalSubmit = (values, isExist) => {
    console.log("handle Vitals", values);

    let payload = {
      bloodPressure: values?.bloodPressure,
      pulse: values?.pulse,
      temprature: values?.temparature,
      respiration: values?.respiration,
      weight: values?.weight,
      createdBy: data?.physicianId,
    };

    if (isExist === 1) {
      let vitalId =
        data.patientVitals && data.patientVitals.length > 0
          ? data.patientVitals[0].id
          : "";

      dispatch(
        diagnosissActions.updateDiagnosis(
          vitalId,
          "patientVitals",
          (resp) => {}
        )
      );
    } else {
      dispatch(
        diagnosissActions.addDiagnosis(id, "patientVitals", payload, (b) => {
          console.log("vitals cb", b);
        })
      );
    }

    setOpenVitalsPopup(false);
  };

  const renderMedicaions = (items) => {
    return (
      <>
        {items.map((item) => {
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
      <NavLink to="/admin/appointments/diagnosis">Go to</NavLink>

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

      {data && (
        <div className="product-detail-page">
          <Grid container xs={12} sm={12} md={12} spacing={2}>
            <Card className="w-100">
              <CardHeader title="Appointment Details" />

              <CardContent>
                <article className="card w-100">
                  <header className="card-header">
                    {data ? data.title : ""} - Id :{data ? data.id : ""}
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
                          {data ? data.status : ""}
                        </div>
                        <div className="col">
                          {" "}
                          <strong>Physician:</strong> <br />
                          <Chip
                            avatar={
                              <Avatar>
                                {data ? data.physicianName.charAt(0) : ""}
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
                            label={data ? data.patientName : ""}
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
                <Button onClick={() => setOpenVitalsPopup(true)}>
                  Add/Update Vitals{" "}
                  <Icon icon={scheduleFilled} width={14} height={14} />
                </Button>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Alert
                      icon={<CheckCircleOutlineIcon fontSize="inherit" />}
                      severity={
                        data.patientVitals && data.patientVitals.length > 0
                          ? data.patientVitals[0].temparature > 99
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
              <CardHeader title="Medication and Allergies" />
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
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Allergies</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {renderMedicaions(data.medications ? data.medications : [])}
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>

          {isLoading && <div className="overlay"></div>}
        </div>
      )}
    </>
  );
};
