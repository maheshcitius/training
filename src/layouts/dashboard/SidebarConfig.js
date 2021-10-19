import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import React, {  useEffect } from 'react';


// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;


 
const sidebarConfig = {
  "admin":[
    {
      title: 'Dashboard',
      path: 'admin/dashboard',
      icon: getIcon(pieChart2Fill)
    },
    {
      title:'Manage Physician',
      path:'admin/physicians',
      icon: getIcon(peopleFill)

    },
    {
      title:"Manage Patient",
      icon:getIcon(peopleFill),
      path:'admin/patients'

    },
    {
      title:"Manage Appointments",
      icon:getIcon(personAddFill),
      path:'admin/appointments'

    },
    {
      title:"Medical Data",
      icon:getIcon(personAddFill),
      path:'admin/medical-data'

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
      path:"/patient/immunization"

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
export const SidebarConfig1 = () => {


  let [sidebarConfigs, setSidebarConfigs] = React.useState(sidebarConfig)


  useEffect(() => {
    // Redirect to dashboard
     if(localStorage.getItem('user')){

      let user = JSON.parse(localStorage.getItem('user')).user;
      console.log("login role" , user)

     

      setSidebarConfigs(sidebarConfig[user.role])
    }
     
     
    
  },[]);

  return sidebarConfigs;

}
//  var sidebarConfig=[];
//   if(localStorage.getItem('user')){

//     let user = JSON.parse(localStorage.getItem('user')).user;
//     console.log("login role" , user)

//     sidebarConfig = s[user.role]
  
//   }
//   else{
//     sidebarConfig =  []
//   }


// const sidebarConfig = [
//   {
//     title: 'dashboard',
//     path: '/dashboard/app',
//     icon: getIcon(pieChart2Fill)
//   },
//   {
//     title: 'user',
//     path: '/dashboard/user',
//     icon: getIcon(peopleFill)
//   },
//   {
//     title: 'product',
//     path: '/dashboard/products',
//     icon: getIcon(shoppingBagFill)
//   },
//   {
//     title: 'blog',
//     path: '/dashboard/blog',
//     icon: getIcon(fileTextFill)
//   },
//   {
//     title: 'login',
//     path: '/login',
//     icon: getIcon(lockFill)
//   },
//   {
//     title: 'register',
//     path: '/register',
//     icon: getIcon(personAddFill)
//   },
//   {
//     title: 'Not found',
//     path: '/404',
//     icon: getIcon(alertTriangleFill)
//   }
// ];
//  // Redirect to dashboard

//  const conf = () => {

//   if(localStorage.getItem('user')){

//     let user = JSON.parse(localStorage.getItem('user')).user;
//     console.log("login role" , user)
  
      
//      return user.role;
//   }
//   else{
//     return []
//   }

//  }

export default sidebarConfig['patient'];
