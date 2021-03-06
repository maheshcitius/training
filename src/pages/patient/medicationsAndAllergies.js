import { useEffect, useState } from "react";

import { GetMedications } from "../../components/Patients/MedicationAllergyComp/GetMedication";
import { AddMedication } from "../../components/Patients/MedicationAllergyComp/AddMedication";
import { useDispatch, useSelector } from "react-redux";
import { medicationAllergyActions } from "../../actions/medicationAllergy.action";
import { bindActionCreators } from "redux";

export const PatientMedicationsAndAllergies = (props) => {
  const dispatch = useDispatch();

  const UserInfo = useSelector((state) => state.authentication);
  const { updateMedication } = bindActionCreators(
    medicationAllergyActions,
    dispatch
  );

  const handleSubmit = (values) => {
    console.log(values, "form values");
    updateMedication({
      patientId: UserInfo?.currentUser?.id,
      otherAllergies: values.otherAllergies,
      HVMA: values.hvma,
      drugAllergies: values.drugAllergies,
      socialDrugs: values.socialDrugs,
      medications: values.currentMedication,
    });
  };

  return (
    <div>
      {/* {console.log(formik.values.otherAllergies)} */}
      <GetMedications handleSubmit={handleSubmit} />
    </div>
  );
};
