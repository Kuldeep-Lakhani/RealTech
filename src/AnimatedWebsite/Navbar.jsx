import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <Link className='navbar-brand text-decoration-none' to="/">Re@lTech</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item">
                                            <Link className='active text-decoration-none' to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='active text-decoration-none' to="/service">Service</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='active text-decoration-none' to="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='active text-decoration-none' to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
