import React from 'react';
import '../App.css'
import logo from '../assets/troll-face.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}