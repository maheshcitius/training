import React from 'react'
import {
    useLocation
  } from "react-router-dom";

export const  InviteUser = () => {


    // the query string for you.
const  useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }


  let query = useQuery();

console.log("invite user parameters",JSON.stringify(query));

console.log("invite user parameters",query.get("role"));




    return (
        <div>
                <h5>Invite user</h5>
                {query.get("email")}
              role=  {query.get("role")}
        </div>
    )
}

