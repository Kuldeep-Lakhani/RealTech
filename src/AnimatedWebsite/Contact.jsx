import React, { useState } from 'react'

const Contact = () => {
    
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: ""
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (event) => {
        // Without refreshing the page
        event.preventDefault();
        alert(`My Name is ${data.fullName}. My Contact Number is ${data.phone}. My Email Address is ${data.email}. and Here is What I want to say: ${data.msg}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Name"
                                    name='fullName'
                                    value={data.fullName}
                                    onChange={inputEvent}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="+91 123456789"
                                    name='phone'
                                    value={data.phone}
                                    onChange={inputEvent}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    name='email'
                                    value={data.email}
                                    onChange={inputEvent}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    name='msg'
                                    value={data.msg}
                                    onChange={inputEvent}
                                    rows="3">
                                </textarea>
                            </div>

                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact