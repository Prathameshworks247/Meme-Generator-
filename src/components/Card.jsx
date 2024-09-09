import React from "react";
import star from '../assets/star.png'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Card(props){
    let badge
    if (props.openSpots === 0){
        badge = "ONLINE"
    }
    else if (props.location === "Online"){
        badge = "SOLD OUT"
    }
    return (
        
        // we can use Javascript inside the curly braces so it is legal to 

        <div className="card">
            {badge && <div className="card--badge">{badge}</div>}
            <img src={`../src/assets/${props.coverImg}`} className="card--image rounded"/>
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="card--price">From ${props.price} </span>/ Person</p>
        </div>
    )
}