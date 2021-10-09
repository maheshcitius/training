import {AdminDashboard} from '../pages/admin'
import {ManagePatients} from '../pages/admin/managePatients'
import {
    Link,
    NavLink,
    useLocation,
    useRoutes,
    matchRoutes,
    useResolvedLocation,
    useParams,
  } from "react-router-dom";

function NewUsers() {
    return (
      <div className="grid grid-cols-2">
        <div>
          <p className="mb-4">New users:</p>
  
          {[...Array(20).keys()].map((index) => (
            <div key={index}>
              <NavLink
                to={`${index}`}
                activeClassName="text-gray-900"
                inactiveClassName="text-gray-300 hover:text-gray-500"
              >
                User {index}
              </NavLink>
            </div>
          ))}
        </div>
        <div>
        
        </div>
      </div>
    );
  }

  function Page({ title,...props }) {
    return (
      <div>
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
            {props.children}
            </div>
          </div>
        </main>
      </div>
    );
  }

  function UserDetail() {
    let params = useParams();
  
    return <p className="text-lg font-semibold">User {params.id} detail</p>;
  }
  


export const routes = [
    {
      path: "/",
      element: <AdminDashboard />,
      children: [
        {   path: "/managepatients", 
            element: <ManagePatients/>,
            children: [{ path: "/:id", element: <UserDetail />}]
         },
        {
          path: "/managephysicians",
          element: <p>Manage phy</p>,
          children: [{ path: "/:id", element: <p>phy1 </p> }],
        },
        { path: "/appointments", element: <p>Appointments</p> }
      ]
    },
    { path: "/team", element: <Page title="Team" /> },
    { path: "/projects", element: <Page title="Projects" /> },
    { path: "/calendar", element: <Page title="Calendar" /> }
]