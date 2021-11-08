import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TextField,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableHead,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  Alert,
  ListItemIcon,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};
const typographyStyle = {
  // margin
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const ManagePatientView = (props) => {
  const patientReducer = useSelector((state) => state.patientReducer);
  const [pdemo, setPdemo] = useState({
    address: "",
    ethnicity: "",
    familyMedicalHistory: "",
    gender: "",
    insuranceProvideer: "",
    medicalHistory: "",
    occupation: "",
    patientId: "",
    surgeries: "",
  });

  console.log("pr", patientReducer);

  // if (patientReducer?.patientDemographics?.length > 0) {
  //   let t = patientReducer.patientDemographics[0];
  //   setPdemo({
  //     address: t.address,
  //     ethnicity: t.ethnicity,
  //     familyMedicalHistory: t.familyMedicalHistory,
  //     gender: t.gender,
  //     insuranceProvideer: t.insuranceProvideer,
  //     medicalHistory: t.medicalHistory,
  //     occupation: t.occupation,
  //     patientId: t.patientId,
  //     surgeries: t.surgeries,
  //   });
  // }

  const patientImmunisation = patientReducer?.patientImmunisation;

  console.log("-----state value patientReducer------", patientReducer);
  console.log("-----props.data------", props.data);
  const { firstname, lastname, dateOfBirth, email, mobileNumber, id } =
    props.data;

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <TextField
            id="patientId"
            label="Patient Id"
            defaultValue={id}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="patient-name"
            label="Patient Name"
            defaultValue={firstname + " " + lastname}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <TextField
            id="dateOfBirth"
            label="Date of birth"
            defaultValue={dateOfBirth}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="email"
            label="Email"
            defaultValue={email}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Stack>

        <Typography
          sx={{ fontSize: 14 }}
          variant="h6"
          color="text.secondary"
          gutterBottom
        >
          Demographics Details
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <TextField
            id="mobileNumber"
            label="Mobile number"
            defaultValue={mobileNumber}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="ethnicity"
            label="ethnicity"
            defaultValue={pdemo?.ethnicity}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <TextField
            id="address"
            label="Address"
            defaultValue={pdemo?.address}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="occupation"
            label="Occupation"
            defaultValue={pdemo?.occupation}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <TextField
            id="insuranceProvideer"
            label="Insurance Provider"
            defaultValue={pdemo?.insuranceProvideer}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />

          <TextField
            id="familyMedicalHistory"
            label="Family Medical History"
            defaultValue={pdemo?.familyMedicalHistory}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <TextField
            id="medicalHistory"
            label="MedicalHistory"
            defaultValue={pdemo?.medicalHistory}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="surgeries"
            label="Surgeries"
            defaultValue={pdemo?.surgeries}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Stack>
      </Stack>
      <Typography
        sx={{ fontSize: 14, padding: "15px 0 0 0" }}
        variant="h6"
        color="text.secondary"
        gutterBottom
      >
        Immunization Details
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Vaccine Name</TableCell>
              <TableCell align="center">Number Of Doses</TableCell>
              <TableCell align="center">Vaccinated On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientImmunisation?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.vaccineName}</TableCell>
                <TableCell align="center">{row.noOfDoses}</TableCell>
                <TableCell align="center">{row.vaccinatedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
