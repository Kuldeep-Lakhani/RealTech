import React from 'react'
import '../GoogleNotesClone/noteClone.css'
import Header from '../GoogleNotesClone/Header';
import CreateNote from '../GoogleNotesClone/CreateNote';
import Notes from './Notes';
import Footer from '../GoogleNotesClone/Footer';

const MainClone = () => {
    return (
        <>
            <Header />
            <CreateNote />
            <Notes />
            <Footer />
        </>
    )
}

export default MainClone;
