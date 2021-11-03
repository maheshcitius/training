import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardHeader } from "@mui/material";
import Chart from "react-apexcharts";
import { merge } from 'lodash';
import { fNumber } from '../../../utils/formatNumber';
import { BaseOptionChart } from '../../charts';

const AppConversionRates = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let appointmentCount = [];
    let total = [],
      pending = [],
      scheduled = [],
      completed = [],
      rejected = [];
    axios
      .get("http://localhost:3003/appointments")
      .then((response) => {
        var totalAppointments = response.data.length;
        total.push(totalAppointments);
        var pendingAppointments = response.data.filter(function (appointment) {
          return appointment.status === "pending";
        });
        pending.push(pendingAppointments.length);
        var scheduledAppointments = response.data.filter(function (
          appointment
        ) {
          return appointment.status === "scheduled";
        });
        scheduled.push(scheduledAppointments.length);
        var rejectedAppointments = response.data.filter(function (appointment) {
          return appointment.status === "rejected";
        });
        rejected.push(rejectedAppointments.length);

        var completedAppointments = response.data.filter(function (
          appointment
        ) {
          return appointment.status === "completed";
        });
        completed.push(completedAppointments.length);
        appointmentCount = [
          ...total,
          ...pending,
          ...completed,
          ...scheduled,
          ...rejected,
        ];
        setData(appointmentCount);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <Card>
      <CardHeader title="Appointment Details" subheader="From past one year" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <Chart
          type="bar"
          series={data}
          options={merge(BaseOptionChart(), {
            tooltip: 
            {
              marker: { show: false },
              y: {
                formatter: (seriesName) => fNumber(seriesName),
                title: {
                  formatter: (seriesName) => `#${seriesName}`
                }
              } 
            },
            chart: { id: "apexchart-example" },
            xaxis: {
              categories: [
                "Total",
                "Pending",
                "Completed",
                "Scheduled",
                "Rejected",
              ],
            },
            plotOptions: { bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }},
          })}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          series={[{ name: "series-1", data: data }]}
          height={364}
        />
      </Box>
    </Card>
  );
};

export default AppConversionRates;
