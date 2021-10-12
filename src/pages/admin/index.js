import {
    Outlet
  } from 'react-router-dom';
import HomeLayout from '../../shared/HomeLayout';


export  function AdminDashboard() {
    

    return (
        <>
             
            <HomeLayout>
               
                <h3>Admin Dashboard</h3>
                <Outlet />

            </HomeLayout>
              
             
                    
        </>
    );

};