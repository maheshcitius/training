import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { demographicActions } from "../../redux-store/actions";
import { DemographicsForm } from "../../shared/DemographicsForm";
import { demographicsService } from "../../services";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const PatientDemographics = () => {
  const dispatch = useDispatch();
  // const {data} = useSelector((state) => state.demographics);

  const { postDemographics, getDemographics, updateDemographics } =
    bindActionCreators(demographicActions, dispatch);
  const [dms, setdms] = React.useState([]);

  useEffect(() => {
    demographicsService.getAllDemographics().then((response) => {
      if (response.data.length > 0) {
        setdms(response.data);
      }
    });
  }, []);

  // const demographs = useSelector((state) => state.demographics);
  console.log("Demographs", dms);

  const handleSubmit = (values, id) => {
    console.log("in handle submit edit,update", id);
    let obj = {
      firstName: values.firstName,
      lastName: values.lastName,
      dob: values.dob,
      gender: values.demographics,
      ethinicity: values.ethinicity,
      education: values.education,
      employment: values.employment,
      address: values.address,
      phoneNumber: values.phoneNumber,
      medicalhistory: values.medicalhistory,
      familymedicalhistory: values.familymedicalhistory,
      surgeries: values.surgeries,
      insuranceprovider: values.insuranceprovider,
    };
    if (id !== 0) {
      updateDemographics(id, obj);
    } else {
      postDemographics(obj);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Patient Demographics
          </Typography>
          <DemographicsForm savedValues={dms} submit={handleSubmit} />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
