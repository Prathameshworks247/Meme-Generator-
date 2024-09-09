import React from "react";
import logo from '../assets/airbnb-logo.png' 
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid shadow rounded" id = 'l1'>
                <img src={logo} alt="React Logo" className="logo" />
            </div>

        </nav>
    )
}