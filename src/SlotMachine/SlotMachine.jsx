import React from 'react'
import "../SlotMachine/SlotMachine.css"

const SlotMachine = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;

    if ((x === y) && (y === z)) {
        return (
            <>
                <div className='slot-inner'>
                    <h2> {x} {y} {z} </h2>
                    <h3>This is Matching!</h3>
                </div>
                <hr />
            </>
        )
    } else {
        return (
            <>
                <div className='slot-inner'>
                    <h2> {x} {y} {z} </h2>
                    <h3>This is Not Matching!</h3>
                    <hr />
                </div>
            </>
        )
    }
}

export default SlotMachine;