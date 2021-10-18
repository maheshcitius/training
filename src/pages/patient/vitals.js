import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';

import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import React, {UseRef} from 'react';
import { Line } from 'react-chartjs-2';
import  VitalForm from '../../shared/VitalForm';

// const data = {
//     labels: ['1', '2', '3', '4', '5', '6'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         fill: false,
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgba(255, 99, 132, 0.2)',
//       },
//     ],
//   };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  

const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
        label: 'Body Temprature',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};


export const PatientVitals = () => {
    return (
        <Page title="Patient | Vitals">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5,pt:5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Vitals</Typography>
            <div>
            {/* <Line data={data} options={options} /> */}
            <VitalForm />
            </div>
          </Box>
          </Container>
          </Page>
  )
    

};