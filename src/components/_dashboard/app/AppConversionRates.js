import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Box, Card, CardHeader } from "@mui/material";
// utils
import { fNumber } from "../../../utils/formatNumber";
//
import { BaseOptionChart } from "../../charts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// ----------------------------------------------------------------------

const CHART_DATA = [
  { data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] },
];
var C_DATA = [
  {
    data: [],
  },
];
var P = [];
export default function AppConversionRates() {
  const Appts = useSelector((state) => state.appointments);

  if (Appts) {
    // var p = [];
    var pc = [];
    var o = {};

    Appts.appointments?.map((a) => {
      o[a.physicianId + "-" + a.physicianName]
        ? o[a.physicianId + "-" + a.physicianName]++
        : (o[a.physicianId + "-" + a.physicianName] = 1);
    });

    for (let [key, value] of Object.entries(o)) {
      P.push(key);
      pc.push(value);
    }
    C_DATA[0].data = pc;
  }

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories: P,
    },
  });

  return (
    <Card>
      <CardHeader title="Physician Wise " subheader="Visits" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={C_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
