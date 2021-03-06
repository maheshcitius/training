import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { demographicActions } from "../../redux-store/actions";
import { demographicsService, userInformation } from "../../services";
import { DM } from "../../shared/DM";
import Page from "../../components/Page";
import PageHeader from "../../shared/PageHeader";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const PatientDemographics = () => {
  const dispatch = useDispatch();
  // const {data} = useSelector((state) => state.demographics);

  const { postDemographics, getDemographics, updateDemographics } =
    bindActionCreators(demographicActions, dispatch);
  const [dms, setdms] = React.useState([]);
  const user = userInformation.getCurrentUser();

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
    debugger;
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
      medicalHistory: values.medicalHistory,
      familyMedicalHistory: values.familyMedicalHistory,
      surgeries: values.surgeries,
      insuranceProvider: values.insuranceProvider,
      patientId: user?.user.id,
    };
    if (id === undefined) {
    } else if (id > 0) {
      updateDemographics(id, obj);
    } else {
      postDemographics(obj);
    }
  };

  return (
    <Page title="Patient  | Demographics">
      <PageHeader
        title="Demographics"
        subTitle="Demographics and Medical History"
        icon={<AccountBoxIcon fontSize="large" />}
      />

      <Container>
        <DM savedValues={dms} submit={handleSubmit} />
      </Container>
    </Page>
  );
};
