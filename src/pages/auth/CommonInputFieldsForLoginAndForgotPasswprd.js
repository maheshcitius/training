import { Avatar, Grid } from '@material-ui/core';
import { Paper } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

const CommonInputFieldsForLoginAndForgotPasswprd=({firstBX,secBX,title})=>{
    const avtarStyle={
        backgroundcolor: '#0d6efd !important'
    }
    return(
        <Grid align="center">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
             <AccountCircleOutlinedIcon/>
            </Avatar>
            {/* <Avatar style={avtarStyle}></Avatar> */}
            <h3>{title}</h3>
            <TextField id={firstBX} label={firstBX} variant="outlined" style={{ margin:'20px 0' }}  name={firstBX}  size="small" fullWidth required/>
            <TextField id={secBX} label={secBX} variant="outlined" style={{margin:'0 0 20px 0'}} name={secBX} size="small" type="password" fullWidth required/>
        </Grid>
    )
}

export default CommonInputFieldsForLoginAndForgotPasswprd;