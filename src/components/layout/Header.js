import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To do list</h1>
            <Link style={linkStyles} to="/">Home</Link>|
            <Link style={linkStyles} to="/about">About</Link>|
            <Link style={linkStyles} to="/todos-saved">Todos with Firebase</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '0'
}

const linkStyles = {
    color: '#ffffff',
    margin: '5px',
    textDecoration: 'none'
}