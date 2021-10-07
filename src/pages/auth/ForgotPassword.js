import { Avatar, Grid } from '@material-ui/core';
import { Paper } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CommonInputFieldsForLoginAndForgotPasswprd from'./CommonInputFieldsForLoginAndForgotPasswprd';
import React from 'react';

const ForgotPassword=({firstBX,secBX,title})=>{
    const paperStyle={
        padding: 20,
        width: 320,
        height: '80vh',
        margin: '20px auto',
    }
    return (
      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <CommonInputFieldsForLoginAndForgotPasswprd firstBX={firstBX} secBX={secBX} title={title}/>
              <Button variant="contained" fullWidth>Submit</Button>
              &nbsp;
              <hr></hr>
          </Paper>
      </Grid>
    )
}

export default ForgotPassword;