

import React from 'react'
import { Paper, Card, Typography, Button ,Stack } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';




  const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(1),
        display:'flex',
        marginBottom:theme.spacing(1),
        width:"100%"
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    backBtn:{
        float:'right',
        margin:'auto'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))


export default function PageHeader(props) {

    const navigate = useNavigate();

    const classes = useStyles();
    const { title, subTitle, icon } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
           
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
                <div className="actions">
         
                </div>
                <Button
            variant="contained"
            color="primary"
            className={classes.backBtn}
            onClick={() => navigate(-1)} 
          >
            Back
          </Button>
                </div>
         
          
        </Stack>
            
        </Paper>
    )
}