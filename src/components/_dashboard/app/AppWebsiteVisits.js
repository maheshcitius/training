import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import { BaseOptionChart } from "../../charts";
import { useSelector } from "react-redux";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import { Apps } from "@material-ui/icons";

// ----------------------------------------------------------------------



export default function AppWebsiteVisits() {
  const Appts = useSelector((state) => state.appointments);
  console.log(Appts,"appts")

  let labelsData=Appts && Appts.appointments.map((item)=>{
    return moment(item.scheduleDate).format('l'); 
  
  })

  let pendingDate=Appts.appointments.filter((appts,index)=>{
    return appts.status==='pending'? appts.scheduleDate:''; 
  }
  )
  let statistics=pendingDate.map((p)=>{return moment(p.scheduleDate).format('l')});
  console.log(statistics,"status statistics")    ;   


  
  let scheduledDate=Appts.appointments.filter((appts)=>{
    return appts.status==='scheduled'? appts.scheduleDate:''; 
  }
  )
  let STAT1=scheduledDate.map((s)=>{return moment(s.scheduleDate).format('l')});
  console.log(STAT1,"status statistics scheduled")    ; 



    
  let  completedDate=Appts.appointments.filter((appts,index)=>{
    return appts.status==='completed'? appts.scheduleDate:''; 
  }
  )
  let STAT2=completedDate.map((c)=>{return moment(c.scheduleDate).format('l')});
  console.log(STAT2,"status statistics completed")    ; 

  let  rejectedDate=Appts.appointments.filter((appts,index)=>{
    return appts.status==='rejected'? appts.scheduleDate:''; 
  }
  )
  let STAT3=rejectedDate.map((r)=>{return moment(r.scheduleDate).format('l')});
  console.log(STAT3,"status statistics rejected")    ; 

  

  let total = [],
    pending = [],
    scheduled = [],
    completed = [],
    rejected = [];
    var totalAppointments = Appts.appointments.length;
    total.push(totalAppointments);
    var pendingAppointments = Appts.appointments.filter(function (appointment) {
      return appointment.status === "pending";
    });
    pending.push(pendingAppointments.length);
    var scheduledAppointments = Appts.appointments.filter(function (
      appointment
    ) {
      return appointment.status === "scheduled";
    });
    scheduled.push(scheduledAppointments.length);
    var rejectedAppointments = Appts.appointments.filter(function (appointment) {
      return appointment.status === "rejected";
    });
    rejected.push(rejectedAppointments.length);

    var completedAppointments = Appts.appointments.filter(function (
      appointment
    ) {
      return appointment.status === "completed";
    });
    completed.push(completedAppointments.length);
     
 
  const CHART_DATA = [
    {
      name: "completed",
      type: "bar",
      data: completed,
     
    },
    {
      name: "pending",
      type: "bar",
      data:pending,
    
    },
    {
      name: "scheduled",
      type: "bar",
      data: scheduled,
    
    },
    {
      name: "rejected",
      type: "bar",
      data: rejected,
    
    },
    {
      name: "total",
      type: "bar",
    
    }
  ];
  console.log(labelsData,"labelsData")
  
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.success.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
    ],
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["solid", "gradient", "solid"] },
    labels:labelsData,
    xaxis: { type: "date" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
