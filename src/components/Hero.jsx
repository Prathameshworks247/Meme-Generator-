import React from "react";
import logo2 from '../assets/photo-grid.png' 
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Hero(){
    
    return (
        <section className="hero">
            <img src={logo2} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}