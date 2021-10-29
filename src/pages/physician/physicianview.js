import React from "react";
import {
    Card,
    Table,
    Stack,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
    Box,
    Alert,
    ListItemIcon,
  } from '@mui/material';
  import CardContent from '@mui/material/CardContent';
  import CardActions from '@mui/material/CardActions';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };

export default function PhysicanView(props) {
    console.log('in physician view', props);
  const  {firstName,lastName,specialization,dob,gender,experience} = props.row;
    return (
        <Box sx={style}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Physician Name
<Typography variant="h5" component="div">
                            {firstName} {lastName}
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

                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>


    );
}




