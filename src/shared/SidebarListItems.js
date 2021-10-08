import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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


export const PatientSidebarListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ScheduleIcon />
      </ListItemIcon>
      <ListItemText primary="Schedule Appointments" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Appointments History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Demographics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MedicationIcon />
      </ListItemIcon>
      <ListItemText primary="Medication and Allergies" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SelfImprovementIcon />
      </ListItemIcon>
      <ListItemText primary="Immunization Details" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeviceThermostatIcon />
      </ListItemIcon>
      <ListItemText primary="Vitals" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Patient Education" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders and Bills" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

export const AdminSidebarListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Patient Order" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Physician Records" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Appointments" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Billing" />
    </ListItem>    
  </div>
);

export const PhysicianSidebarListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PermIdentityIcon />
      </ListItemIcon>
      <ListItemText primary="Patient Details" />
    </ListItem>    
  </div>
);

