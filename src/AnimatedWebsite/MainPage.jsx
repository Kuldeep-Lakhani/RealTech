import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './MainPage.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Footer from './Footer';

const MainPage = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' Component={Home} />
                <Route exact path='/about' Component={About} />
                <Route exact path='/contact' Component={Contact} />
                <Route exact path='/service' Component={Service} />
                <Route path='*' Component={Home} />
            </Routes>
            {/* <Footer /> */}
        </>
    )
}

export default MainPage;
