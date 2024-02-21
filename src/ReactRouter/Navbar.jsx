import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="nav-style">
                <Link className='active' to="/">Home</Link>
                <Link className='active' to="/about">About</Link>
                <Link className='active' to="/search">Search</Link>
                <Link className='active' to="/contact">Contact</Link>
                <Link className='active' to="/user/kuldeep/lakhani">User</Link>
            </div>
        </>
    )
}

export default Navbar
