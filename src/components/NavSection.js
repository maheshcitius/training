import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import React, {  useEffect } from 'react';
import { useSelector } from "react-redux";




// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = {
  "admin":[
    {
      title: 'Dashboard',
      path: '/admin/dashboard',
      icon: getIcon(pieChart2Fill)
    },
    {
      title:'Manage Physician',
      path:'/admin/physicians',
      icon: getIcon(peopleFill)

    },
    {
      title:"Manage Patient",
      icon:getIcon(peopleFill),
      path:'/admin/patients'

    },
    {
      title:"Manage Appointments",
      icon:getIcon(personAddFill),
      path:'/admin/appointments'

    },
    {
      title:"Medical Data",
      icon:getIcon(personAddFill),
      path:'/admin/medical-data'

    }
    ],

  "patient":[
    {
      title:"Dashboard",
      icon:getIcon(personAddFill),
      path:'/patient/dashboard'

    },
    {
      title:"Profile",
      icon:getIcon(personAddFill),
      path:'/patient/profile'

    },
    {
      title:"Demographics",
      icon:getIcon(personAddFill),
      path:'/patient/demographics'

    },
    {
      title:"Imminization Details",
      icon:getIcon(personAddFill),
      path:"/patient/immunizations"

    },
    {
      title:"Schedule Appointment",
      icon:getIcon(personAddFill),
      path:"/patient/schedule-appointment"

    },
    {
      title:"Appointment history",
      icon:getIcon(personAddFill),
      path:'/patient/appointments'

    },
    {
      title:"Medication and Allergies",
      icon:getIcon(personAddFill),
      path:'/patient/allergies-immunizations'

    }
  ],
  "physician":[
    {
      title:"Dashboard",
      icon:getIcon(personAddFill),
      path:"/physician/dashboard"
    },
    {
      title:"Patient Details",
      icon:getIcon(personAddFill),
      path:'/physician/patients'

    },
    {
      title:"Appointments",
      icon:getIcon(personAddFill),
      path:"/physician/appointments"

    }
  ]
}
const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary,
    '&:before': {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      display: 'none',
      position: 'absolute',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.primary.main
    }
  })
);

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func
};

function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium'
  };

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle)
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}



export default function NavSection({  ...other }) {

  const UserInfo = useSelector((state) => state.authentication);

 
  var role = '';
  if(UserInfo.currentUser){

    role = UserInfo.role;
  }

  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
       { role &&<List disablePadding>
        {sidebarConfig[role].map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
        }
    </Box>
  );
}
