import React from "react";
import Scard from './shared/Scard';
import Login from './pages/auth/Login';
import ForgotPassword from "./pages/auth/ForgotPassword";
import './App.css';

export default function App() {
  const characters=[
    {
      id: 1,
      name: "Wonder Woman",
      alterEgo: "Diana Prince",
      alignment: "hero"
    },
    {
      id: 2,
      name: "Poison Ivy",
      alterEgo: "Pamela Lillian Isley",
      alignment: "villain"
    },
    {
      id: 3,
      name: "Black Canary",
      alterEgo: "Dinah Drake",
      alignment: "hero"
    },
    {
      id: 4,
      name: "Catwoman",
      alterEgo: "Selina Kyle",
      alignment: "villain"
    }
  ];
 
  return (
    // <Scard characters={characters}/>
    <Login firstBX="User Name" secBX="Password" title="Sign In"/>
    // <ForgotPassword firstBX="Old Password" secBX="New Password" title="Forgot Password"/>
  );
}

