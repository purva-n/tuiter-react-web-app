import React from "react";
import "./index.css"
import 'font-awesome/css/font-awesome.min.css';
import TuitList from "../tuits";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
   return(
       <>
           <h4>Home</h4>
           <WhatsHappening />
           <TuitList />
       </>
   )
}

export default  HomeComponent;