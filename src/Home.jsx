import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Home = (props) => {

  

    return (
        <div className="Home">
           
           <Outlet></Outlet>
        </div>    
    )
}