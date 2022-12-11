import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { accountService } from "./account.service";


export const New = (props) => {
 
 if(!accountService.isLogged()){

    return <Navigate to="/connexion"/>
 }
  
        <div className="Home">
           
           hello 

        </div>    
}