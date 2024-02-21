import React, { useState } from "react";
import "../LoginForm/LoginForm.css"

const LoginForm = () => {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: ""
    });

    const inputEvent = (event) => {
        // Object destructuring:-
        const { name, value } = event.target;
        console.log({ name, value });

        // using spread operator:-
        setFullName({ ...fullName, [name]: value })
    }

    const onSubmits = (event) => {
        //Do not Refresh the page by using this method:-
        event.preventDefault();
        alert("Form Submitted!!")
    }

    return (
        <>
            <form onSubmit={onSubmits}>
                <div>
                    <h1 className="heading">Hello, {fullName.fName} {fullName.lName} </h1>
                    <p> {fullName.email} </p>
                    <p> {fullName.phone} </p>
                    <input
                        type="text"
                        name="fName"
                        placeholder="Enter Your First Name"
                        onChange={inputEvent}
                        value={fullName.fName}
                    />
                    <input
                        type="text"
                        name="lName"
                        placeholder="Enter Your Last Name"
                        onChange={inputEvent}
                        value={fullName.lName}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        onChange={inputEvent}
                        value={fullName.email}
                    />
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        onChange={inputEvent}
                        value={fullName.phone}
                    />
                    <button type="submit">Submit👆</button>
                </div>
            </form>
        </>
    )
}


export default LoginForm;