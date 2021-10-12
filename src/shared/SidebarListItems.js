import * as React from 'react';
import {ListItem, 
  ListItemIcon ,
  ListItemText
  } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HistoryIcon from '@mui/icons-material/History';
import MedicationIcon from '@mui/icons-material/Medication';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { NavLink } from 'react-router-dom';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';


const menus = {
    admin:[
      {
        "title":'Dashboard',
        "icon":<DashboardIcon />,
        "to":'/admin'

      },
      {
        "title":"Manage Physician",
        "icon":<PersonIcon />,
        "to":'/admin/physicians'

      },
      {
        "title":"Manage Patient",
        "icon":<PersonIcon />,
        "to":"/admin/patients"
      },
      {
        "title":"Manage Appointments",
        "icon":<InfoIcon />,
        "to":'/admin/appointments'

      },
      {
        "title":"Billing",
        "icon":<ReceiptIcon />,
        "to":"/admin/billig"

      }
    ],
    "patient":[
      {
        "title":'Dashboard',
        "icon":<DashboardIcon />,
        "to":'/patient/dashboard'

      },
      {
        "title":"profile",
        "icon":<PersonIcon />,
        "to":'/patient/profile'

      },
      {
        "title":"Demographics",
        "icon":<PersonIcon />,
        "to":"/patient/demographics"
      },
      {
        "title":"Schedule Appointment",
        "icon":<PersonIcon />,
        "to":"/patient/schedule-appointment"
      },
      {
        "title":"Appointment history",
        "icon":<InfoIcon />,
        "to":'/patient/appointments'

      },
      {
        "title":"Billing",
        "icon":<ReceiptIcon />,
        "to":"/patient/billig"

      },
      {
        "title":"Medication and Allergies",
        "icon":<MedicationIcon />,
        "to":'/patient/medication'

      },
      {
        "title":"Imminization Details",
        "icon":<SelfImprovementIcon />,
        "to":"/patient/immunization"

      },
      {
        "title":"Vitals",
        "icon":<InfoIcon />,
        "to":'/patient/vitals'

      },
      {
        "title":"Patient Education",
        "icon":<ReceiptIcon />,
        "to":"/patient/billig"

      }
    ],
    "physician":[
      {
        "title":"Dashboard",
        "icon":<PersonIcon />,
        "to":"/physician/dashboard"
      },
      {
        "title":"Patient Details",
        "icon":<InfoIcon />,
        "to":'/physician/appointments'

      },
      {
        "title":"Appointments",
        "icon":<ReceiptIcon />,
        "to":"/physician/appointments"

      }
    ]
}

export const PatientSidebarListItems = (
  <div>
    {menus.patient.map((menu) => {
     return ( 
        <NavLink to={menu.to}
        exact={true}
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
          textDecoration:"none",         
        }}       
     >
      <ListItem button>       
        <ListItemIcon>
          {menu.icon}
        </ListItemIcon>
        <ListItemText primary={menu.title}/>       
      </ListItem>
      </NavLink> )
    })}
  </div>  
);

export const SidebarListItems = (role)=>
 {return  (
  <div>
    {menus[role].map((menu) => {
     return ( 
        <NavLink to={menu.to}
        exact={true}
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
          textDecoration:"none",
         
        }}
        
     >
      <ListItem button>
       
        <ListItemIcon>
          {menu.icon}
        </ListItemIcon>
        <ListItemText primary={menu.title}/>
       
      </ListItem>
      </NavLink> )
    })
     }
    
  </div>
  
)};


//---static menu-items--
 {/* // <ListItem button>
    //   <ListItemIcon>
    //     <DashboardIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Dashboard" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <PersonIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="My Profile" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <ScheduleIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Schedule Appointments" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <HistoryIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Appointments History" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <PeopleIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Demographics" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <MedicationIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Medication and Allergies" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <SelfImprovementIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Immunization Details" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <DeviceThermostatIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Vitals" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <InfoIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Patient Education" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <ShoppingCartIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Orders and Bills" />
    // </ListItem>
    // <ListItem button>
    //   <ListItemIcon>
    //     <BarChartIcon />
    //   </ListItemIcon>
    //   <ListItemText primary="Reports" />
    // </ListItem> */}
