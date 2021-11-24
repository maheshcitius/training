import {
  Box,
  Container,
  Typography,
  TextField,
  Item,
  Button,
} from "@mui/material";
import { getThemeProps, grid } from "@mui/system";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { medicationAllergyActions } from "../../../actions/medicationAllergy.action";

import { useFormik } from "formik";
import * as yup from "yup";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Page from "../../../shared/Page";
import { Modal } from "@mui/material";
import { FormField } from "../FormField";
import { AddMedication } from "./AddMedication";

export const GetMedications = (props) => {
  const MedicationInfo = useSelector(
    (state) => state.medication.medicationData
  );

  const [data, setdata] = useState(MedicationInfo);
  const [currentMedication, setCurrentMedication] = useState(data.medications);
  const [medicationDetail, setMedicationDetail] = useState("");
  const [otherAllergies, setOtherAllergies] = useState(
    MedicationInfo.otherAllergies
  );
  const [hvma, setHvma] = useState(MedicationInfo.HVMA);
  const [drugAllergies, setDrugAllergies] = useState(
    MedicationInfo.drugAllergies
  );
  const [socialDrugs, setSocialDrugs] = useState(MedicationInfo.socialDrugs);

  const allvalues = {
    currentMedication,
    otherAllergies,
    hvma,
    drugAllergies,
    socialDrugs,
  };

  function handleSave(values) {
    props.handleSubmit(values);
  }

  function addmedication(values) {
    debugger;
    //  console.log(values)
    if (currentMedication) {
      setCurrentMedication([...currentMedication, values]);
    } else {
      setCurrentMedication([values]);
    }
  }

  return (
    <div>
      {console.log(currentMedication, "meee")}
      <FormField name="Current Medication">
        <Select
          id="currentMedication"
          name="currentMedication"
          margin="normal"
          value={medicationDetail}
          fullWidth
          placeholder="Select from your medication to get details"
          variant="standard"
          onChange={(e) => setMedicationDetail(e.target.value)}
        >
          {currentMedication &&
            currentMedication.map((d, i) => (
              <MenuItem
                onSelect={() => console.log(d)}
                key={i}
                value={d}
                name={d.drugName}
              >
                {d.drugName} & {d.drugStrength}
              </MenuItem>
            ))}
          )
        </Select>
      </FormField>
      {medicationDetail && (
        <FormField name="Medication Detail">
          <TextField
            id="medicationDetail"
            name="medicationDetail"
            fullWidth
            margin="normal"
            label="Medication Detail"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            value={
              medicationDetail != "" &&
              `${medicationDetail.type} medication by ${medicationDetail.prescribeBy} ${medicationDetail.directions} `
            }
          />
        </FormField>
      )}

      <Box

      // sx={{ mt: 5 }}
      >
        <FormField name="Herbs /Vitamins /Minerals /Antibiotics">
          <TextField
            id="HVMA"
            name="HVMA"
            fullWidth
            margin="normal"
            // label="Herbs/Vitamins/Minerals/Antibiotics"
            autoComplete=""
            autoFocus
            variant="standard"
            value={hvma}
            onChange={(e) => setHvma(e.target.value)}
          />
        </FormField>
        <FormField name="Social Drugs">
          <TextField
            id="SocialDrugs"
            name="SocialDrugs"
            fullWidth
            margin="normal"
            label="Social Drugs"
            autoComplete=""
            autoFocus
            variant="standard"
            value={socialDrugs}
            onChange={(e) => setSocialDrugs(e.target.value)}
          />
        </FormField>

        <FormField name="Drug-Allergies">
          <TextField
            id="drugAllergies"
            name="drugAllergies"
            fullWidth
            margin="normal"
            label="Drug-Allergies"
            autoComplete=""
            autoFocus
            variant="standard"
            value={drugAllergies}
            onChange={(e) => setDrugAllergies(e.target.value)}
          />
        </FormField>
        <FormField name="Other allergies">
          <TextField
            id="otherAllergies"
            name="otherAllergies"
            fullWidth
            margin="normal"
            label="Other allergies"
            autoComplete=""
            autoFocus
            variant="standard"
            value={otherAllergies}
            onChange={(e) => setOtherAllergies(e.target.value)}
          />
        </FormField>

        <br />
        <Button
          onClick={() => handleSave(allvalues)}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Save
        </Button>

        <AddMedication addmedication={addmedication} />
      </Box>
    </div>
  );
};
