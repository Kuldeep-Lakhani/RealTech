import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <>
            <h1>OOps😤 404 - Page Not Found</h1>
            <Link to="/" className='err-link-btn'>Back to Home</Link>
        </>
    )
}

export default Error;
