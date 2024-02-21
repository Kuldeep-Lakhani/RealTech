import React, { createContext } from 'react'
import ComA from './ComA'

//Create the Context
const FirstName = createContext();
const age = createContext();
const degree = createContext();

const ContextFile = () => {
    return (
        <>
            {/* //Pass the "Provider" Method and the value as a (firstName) to created custom component element FirstName// */}
            <FirstName.Provider value={"Kuldeep Lakhani"}>
                <age.Provider value={20}>
                    <degree.Provider value={"MCA"}>
                        <ComA />
                    </degree.Provider>
                </age.Provider>
            </FirstName.Provider>
        </>
    )
}

export default ContextFile;
// Export the FirstName to pass
export { FirstName, age, degree };