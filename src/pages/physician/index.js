
import {
    Outlet
  } from 'react-router-dom';
import HomeLayout from '../../shared/HomeLayout';
export const PhysicianDashboard = () => {
     

    return (
        <>
             
            <HomeLayout>
               
                <h3>Physician Dashboard</h3>
                <Outlet />

            </HomeLayout>
              
             
                    
        </>
    );

  
}


