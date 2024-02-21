import React, { useState } from 'react'
import "../EventUseState/Event.css"

const Event = () => {
    const purple = '#8e44ad';
    const [bg, setBg] = useState(purple);
    const [name, newName] = useState('Click me');
    const changeColor = () => {
        let newBg = "#34495e";
        setBg(newBg);
        newName('ouch !!😲')
    }

    const bgBack = () => {
        let newBg = "green";
        setBg(newBg)
        newName('Oyyyy!!😠')
    }

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={changeColor} onDoubleClick={bgBack}> {name} </button>
            </div>
        </>
    )
}

export default Event;
