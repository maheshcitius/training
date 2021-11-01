import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const ManagePatientView = (props) =>{
    const patientReducer = useSelector((state) => state.patientReducer);
    console.log("-----state value patientReducer------",patientReducer);

    return ( 
                <Box sx={style}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Physician Name
                                        <Typography variant="h5" component="div">
                                            {firstname} {lastname}
                                        </Typography>
                                    </Typography>

                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Specialization in
                                        <Typography variant="h5" component="div">
                                            {specialization}
                                        </Typography>
                                    </Typography>

                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Date of Birth
                                         <Typography variant="h5" component="div">
                                            {dob}
                                        </Typography>
                                    </Typography>

                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Gender
                                         <Typography variant="h5" component="div">
                                            {gender}
                                        </Typography>
                                    </Typography>

                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Total {experience} years of experience
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell>Dessert (100g serving)</TableCell>
                                                <TableCell align="right">Calories</TableCell>
                                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>



                 
        
    );
}