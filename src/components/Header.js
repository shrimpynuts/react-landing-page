import React from 'react';
import logo from '../assets/logo.png';

export default function Home() {
    return (
        <div className="header">
            <div>
                <img src={logo} height="60%" />
                <h1>Panda</h1>
            </div>
        </div>
    )
}