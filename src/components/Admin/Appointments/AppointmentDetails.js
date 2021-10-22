
import {useLocation ,useParams , useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Person } from "@mui/icons-material";
import {useSelector } from 'react-redux'


export const AppointmentDetails = (props) => {

    let location = useLocation();
    const navigator = useNavigate();

    let  Appointments = useSelector((state) => state.appointments);

   
    let { id } = useParams();
    const [appointments, setAppointments] = useState(Appointments.appointments);

    console.log("Appointments in details comp", appointments)


  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      if(appointments.length>0){
        setData(appointments.find((appointment) => appointment.id.toString() === id));

      }

  },[]);

  const purchaseProduct = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigator.push('/orders');
    }, 5000);
  };
  
    return (
            <>
            <h4>Appointment Details</h4>
                    {data &&
      <div className="product-detail-page">
        <div className="main-info">
        

          <div className="product-name">
            <p>{data.title}</p>
            <p><strong>Physician: </strong>{data.physicianName} MTO</p>
          </div>
        </div>

        <div className="info">
          <p className="label">scheduleDate:</p>
          <p>{data.scheduleDate}</p>
        </div>

        <div className="info">
          <p className="label">Status:</p>
          <p>{data.status}</p>
        </div>

       

        <div className="actions">
          <Button
            color="primary"
            variant="contained"
            onClick={purchaseProduct}
          >
            Purchase
          </Button>
        </div>

        {isLoading &&
        <div className="overlay">
         
        </div>
        }
      </div>
      }
            </>
    );
}

