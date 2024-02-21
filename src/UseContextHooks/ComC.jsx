import React, { useContext } from 'react'
import { FirstName, age, degree } from './ContextFile'

const ComC = () => {

    //Create a variable of useContext and simply pass the "Context Name"
    const fname = useContext(FirstName);
    const myAge = useContext(age);
    const myDegree = useContext(degree);

    return (
        <>
            {/* //Get the value from "Consumer" and consumer always takes a "Function" as an argument// */}
            {/* <FirstName.Consumer>{(fname) => {
                return (
                    <age.Consumer>{(age) => {
                        return (
                            <h1>My Name is {fname} and I am {age} years old.</h1>
                        )
                    }}
                    </age.Consumer>
                )
            }}
            </FirstName.Consumer > */}

            <h3>My Name is {fname} and I am {myAge} years old, and I am pursuing degree of {myDegree}</h3>
        </>
    )
}

export default ComC; 
