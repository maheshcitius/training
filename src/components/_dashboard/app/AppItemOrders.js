import { Icon } from "@iconify/react";
import windowsFilled from "@iconify/icons-ant-design/windows-filled";
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import usergroupAddOutlined from "@iconify/icons-ant-design/usergroup-add-outlined";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(2, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(4),
  height: theme.spacing(4),
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.warning.dark,
    0
  )} 0%, ${alpha(theme.palette.warning.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

export default function AppItemOrders() {
  // let appointments = useSelector((state) => state.appointments);

  let all = useSelector((state) => state.allUsers);
  const [patients, setpatients] = useState(0);

  console.log(all, "aa");

  useEffect(() => {
    if (all.patients) {
      setpatients(all.patients.length);
    }
  }, [all]);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={usergroupAddOutlined} width={14} height={14} />
      </IconWrapperStyle>
      <Typography variant="h6">{fShortenNumber(patients)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Patients
      </Typography>
    </RootStyle>
  );
}
