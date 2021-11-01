import React, { useState, useEffect }  from 'react';
import useStyles from './styles';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import AddressForm from './forms/AddressForm';
import PaymentForm from './forms/PaymentForm';

const steps = ['Shipping Address', 'Payment Details'];


// import { ThemeProvider, Box, Container, Paper, } from '@mui/material';
// import {theme, useStyles } from './styles';
// import Steppers from './Stepper';
// import {StateProvider} from './reducer';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// const publishableKey = "pk_test_51JnHPASECroDUTzQkjFm1U4owwCuCDT2slso9zzaFqUBvUF2H1dAsY3bWpOxI5QMZnuFvnDjYNNojj5krQdNHrYH00UZzGvsHj";
// const testKey = 'sk_test_51JnHPASECroDUTzQpxzAHXDWxNueFoOLyjjwtaftwv8CnbUUXa8jn6jm6kfMo2OqOzOTabK8hYpSRzqT1Zv8EJ3W00yjAosHU3'
// const stripe = loadStripe(publishableKey);

// const Checkout = () => {
//     const classes = useStyles();
//     return(
//         <StateProvider>
//             <ThemeProvider theme={theme}>
//                 <Box component="main" className={classes.boxWrapper}>
//                     <Container maxWidth="md" className={classes.container}>
//                         <Paper elevation={5}>
//                             <Elements stripe={stripe}>
//                                 <Steppers />
//                             </Elements>
                            
//                         </Paper>
//                     </Container>
//                 </Box>
//             </ThemeProvider>
//         </StateProvider>
        
//     )
// }

const Checkout = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const test = (data) => {
        setShippingData(data);
    
        nextStep();
      };

    // useEffect(() => {
    //     if (cart.id) {
    //       const generateToken = async () => {
    //         try {
    //           const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
    //           setCheckoutToken(token);
    //           console.log(token);
    //         } catch {
              
    //         }
    //       };
    
    //       generateToken();
    //     }
    //   }, [cart]);

    //   let Confirmation = () => (order.customer ? (
    //     <>
    //       <div>
    //         <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
    //         <Divider className={classes.divider} />
    //         <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
    //       </div>
    //       <br />
    //       <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    //     </>
    //   ) : (
    //     <div className={classes.spinner}>
    //       <CircularProgress />
    //     </div>
    //   ));

    let Confirmation = () => (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase!</Typography>
            <Divider className={classes.divider} />
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      );
    
    
    //   if (error) {
    //     Confirmation = () => (
    //       <>
    //         <Typography variant="h5">Error: {error}</Typography>
    //         <br />
    //         <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    //       </>
    //     );
    //   }

    const Form = () => activeStep === 0
        ? <AddressForm nextStep={nextStep} test={test} />
        : <PaymentForm nextStep={nextStep} backStep={backStep} shippingData={shippingData} />

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout} >
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                       {steps.map((label) => (
                         <Step key={label}>
                           <StepLabel>{label}</StepLabel>
                         </Step>
                       ))}
                    </Stepper>
                    {activeStep === activeStep.length ? <Confirmation />: <Form />}
                </Paper>
            </main>
        </>
        
    );
}


export default Checkout;