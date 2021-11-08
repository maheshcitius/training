
import { useEffect,useState} from 'react';

import { GetMedications } from '../../components/Patients/MedicationAllergyComp/GetMedication';
import { AddMedication } from '../../components/Patients/MedicationAllergyComp/AddMedication';
import { useDispatch, useSelector } from "react-redux";
import { medicationAllergyActions } from '../../actions/medicationAllergy.action';
import { bindActionCreators } from 'redux';
import {userInformation} from '../../services'


export const PatientMedicationsAndAllergies = (props) => {
  const dispatch = useDispatch();
  const MedicationInfo = useSelector((state) => state.medication.medicationData)

  const UserInfo = userInformation.getCurrentUser();
  const { updateMedication } = bindActionCreators(medicationAllergyActions, dispatch);
  const { createMedication } = bindActionCreators(medicationAllergyActions, dispatch);

const handleSubmit = (values) => {
console.log(values,"form values",MedicationInfo);
 MedicationInfo.length > 0
 ? updateMedication({
    patientID: UserInfo.user.id,
    otherAllergies : values.otherAllergies,
    HVMA :  values.hvma,
    drugAllergies  :  values.drugAllergies,
    socialDrugs :  values.socialDrugs,
    medications : values.currentMedication

    })
 :
  createMedication({
    patientID: UserInfo.user.id,
    otherAllergies : values.otherAllergies,
    HVMA :  values.hvma,
    drugAllergies  :  values.drugAllergies,
    socialDrugs :  values.socialDrugs,
    medications : values.currentMedication

    })
  };

  return (
    <div>
      
     {console.log(MedicationInfo)}
          <GetMedications handleSubmit={handleSubmit} />
      
    </div>
  );
      
 
     
    

};
