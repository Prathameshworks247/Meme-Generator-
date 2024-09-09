import React from 'react';
import '../App.css'
import logo from '../assets/troll-face.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className='header text-light'>
            <img src= {logo} alt="nav-logo" className= "troll-logo"/> 
            <h2 className='meme-text'>Meme Generator</h2>
            <h6 className='pro-text'>React Course - Project 3</h6>   

            
        </div>
    )
}