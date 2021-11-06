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
        "title":"Medications and Allergies",
        "icon":<PersonIcon />,
        "to":"/patient/medications"
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
        "title":"Patient Education",
        "icon":<MedicationIcon />,
        "to":'/patient/education'
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
        "to":"/physician/"
      },
      {
        "title":"Patient Details",
        "icon":<InfoIcon />,
        "to":'/physician/patients'

      },
      {
        "title":"Appointments",
        "icon":<ReceiptIcon />,
        "to":"/physician/appointments"

      }
    ]
}

export const SidebarListItems = (role='admin') =>
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
