import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';



const User = () => {

    //Using useParams Hooks to get data from URL👇
    const { fName, lName } = useParams();

    //Using useLocation Hooks to get location of the particular URL👇
    const location = useLocation();

    //Using useNavigate Hooks to Redirecting to given URL page👇
    const navigate = useNavigate(); 

    const Redirect = () => {
        navigate("/");
    } 

    return (
        <>
            <h1>Welcome to {fName} {lName} Page</h1>
            <p>My Current Location is: {location.pathname} </p>
            <div className="btn">
                {location.pathname === `/user/kuldeep/lakhani` ? <button onClick={Redirect}>HomePage</button> : null}
            </div>
        </>
    )
}

export default User;
