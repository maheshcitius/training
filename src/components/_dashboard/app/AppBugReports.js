import { Icon } from "@iconify/react";
import scheduleFilled from "@iconify/icons-ant-design/schedule-filled";

// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(2, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter,
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
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.error.dark,
    0
  )} 0%, ${alpha(theme.palette.error.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 234;

export default function AppBugReports() {
  let appointments = useSelector((state) => state.appointments);

  const [acount, setacount] = useState(0);

  console.log(appointments, "aa");

  useEffect(() => {
    if (appointments.appointments) {
      setacount(appointments.appointments.length);
    }
  }, [appointments]);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={scheduleFilled} width={14} height={14} />
      </IconWrapperStyle>
      <Typography variant="h6">{fShortenNumber(acount)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Appointments
      </Typography>
    </RootStyle>
  );
}
