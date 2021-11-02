import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Page from "./Page";
import { MandA } from "../shared/MedicationsProceduresForm";
import { useSelector } from "react-redux";

export const Diagnosis = () => {
  let medicalData = useSelector((state) => state.medicalData);

  const [medications, setmedications] = useState([]);

  useEffect(() => {
    var phy = [];

    if (medicalData.medications?.length > 0) {
      phy = medicalData.medications?.map((drug) => {
        var temp = {};
        temp.label = drug.DrugName ? drug.DrugName : "";
        temp.value = drug.ApplNo ? drug.ApplNo : "";

        return temp;
      });
      setmedications(phy);
    }
  }, [medicalData.medications]);

  console.log("mdata", medicalData);
  return (
    <Page title="Diagnosys">
      <Container maxWidth="xl">
        <MandA medications={medications} />
      </Container>
    </Page>
  );
};
