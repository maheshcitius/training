import { Icon } from "@iconify/react";
import usergroupAddOutlined from "@iconify/icons-ant-design/usergroup-add-outlined";
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(2, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
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
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.dark,
    0
  )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function AppWeeklySales() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={usergroupAddOutlined} width={14} height={14} />
      </IconWrapperStyle>
      <Typography variant="h6">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Physicians
      </Typography>
    </RootStyle>
  );
}
