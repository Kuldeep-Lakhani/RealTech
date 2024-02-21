import React from 'react'
import logo from '../GoogleNotesClone/Images/logo.jpg'

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" />
                <h1 className='logo-title'>Google Keep</h1>
            </div>
        </>
    )
}

export default Header;
