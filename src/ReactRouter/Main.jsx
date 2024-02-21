import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './RRNavbar.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import User from './User';
import Search from './Search';

const Main = () => {

    // const Name = () => {
    //     return (
    //         <h1>Hello Name Page</h1>
    //     )
    // } 
    return (
        <>
            <Navbar />

            <Routes>
                <Route exact path='/' Component={() => <Home name="Home" />} />
                <Route exact path='/about' Component={() => <About name="About" />} />
                <Route exact path='/search' Component={Search} />
                <Route exact path='/contact' Component={() => <Contact name="Contact" />} />
                <Route exact path='/user' Component={() => <User name="User" />} />
                {/* 👇// :fName & :lName is used as a parameter to Pass after /user/ //👇 */}
                <Route exact path='/user/:fName/:lName' Component={() => <User name="User" />} />
                <Route path='*' Component={Error} />
            </Routes>
        </>
    )
}

export default Main;


