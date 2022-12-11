import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div  className="Layout">
            Le Layout
            <Outlet></Outlet>
        </div>
    )
}