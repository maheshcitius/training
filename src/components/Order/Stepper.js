import React, { useState } from 'react';

import {Box, Grid, Button, CircularProgress } from '@mui/material';

import {
    Stepper,
    Step,
    StepLabel
} from '@mui//material';

import { useStyles, Connector } from './styles';

import StepIcons from './StepIcons';

import ContactForm from './forms/ContactForm';

import PaymentForm from './forms/PaymentForm';

import {
    useStripe,
    useElements,
    CardNumberElement,
 } from '@stripe/react-stripe-js';

 import { useStateValue } from "./reducer";

 import {
    clientSecretPull,
    stripeDataObjectConverter,
    clientSecretDataObjectConverter
} from './functions';

const StepContent = ({ step }) => {
    switch (step) {
         case 0:
         return <ContactForm />;
         case 1:
         return <PaymentForm />;
         default:
         return <></>;
    }
}


const Steppers = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const [{ formValues }, dispatch] = useStateValue();

    const capture = async () => {
        setLoading(true);

        const clientSecret = await clientSecretPull({
        amount: formValues.amount * 100,
        currency: formValues.currency.code,
        cardType: "card",
        receipt_email: formValues.email,
        metadata: {
            date: formValues.date,
            service: formValues.service,
            facebook: formValues.facebook,
            twitter: formValues.twitter,
            }
        });
        const cardElement = elements.getElement(CardNumberElement);

        const stripeDataObject = {
            payment_method: {
               card: cardElement,
               billing_details: {
                  address: {
                     city: formValues.city,
                     country: formValues.country.code,
                     line1: formValues.line1,
                     line2: formValues.line2,
                     postal_code: formValues.postal_code,
                     state: null
                  },
                  email: formValues.email,
                  name: `${formValues.firstname} ${formValues.lastname}`,
                  phone: null
               },
            },
         }
              const { paymentIntent, error } =  await stripe.confirmCardPayment(clientSecret, stripeDataObject);
     }

     
    
    const handleNext = () => {
        if (activeStep === 1) {
            capture()
         } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
         }  
    }
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    
    return <>
            <Stepper alternativeLabel className={classes.stepper} connector={<Connector />} activeStep={activeStep}>
                {[1, 2].map(e => (
                    <Step key={e} className={classes.step}>
                        <StepLabel StepIconComponent={StepIcons} />
                    </Step>
                ))}
            </Stepper>
            <Box className={classes.mainBox}>
            
                <Box className={classes.mainBox}>
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                        style={{ height: "400px" }}
                    >
                        {activeStep === 2
                            ?
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                            :
                            <form className={classes.form} onSubmit={e => { e.preventDefault(); handleNext() }}>
                                <Grid container spacing={3}>
                                    <StepContent step={activeStep} />
                                    <Grid container item justify="flex-end">
                                        <Button disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {activeStep === 1 ? 'Pay' : 'Next'}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        }
                    </Grid>           
                </Box>
            </Box>
        </>
}

export default Steppers;
