import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { useTheme, styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";
// utils
import { fNumber } from "../../../utils/formatNumber";
//
import { BaseOptionChart } from "../../charts";
import { useSelector } from "react-redux";
// ---------------- ------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

var C_DATA = [0, 0, 0, 0];

export default function AppCurrentVisits() {
  const Appts = useSelector((state) => state.appointments);

  console.log("apps", Appts);

  if (Appts) {
    Appts.appointments?.map((a) => {
      if (a.status === "completed") {
        C_DATA[0] = C_DATA[0] + 1;
      } else if (a.status === "pending") {
        C_DATA[1] = C_DATA[1] + 1;
      } else if (a.status === "scheduled") {
        C_DATA[2] = C_DATA[2] + 1;
      } else {
        C_DATA[3] = C_DATA[3] + 1;
      }
    });
  }

  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.success.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
    ],
    labels: ["completed", "pending", "scheduled", "rejected"],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: "center" },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  });

  return (
    <Card>
      <CardHeader title="Current Visits" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="pie"
          series={C_DATA}
          options={chartOptions}
          height={280}
        />
      </ChartWrapperStyle>
    </Card>
  );
}
