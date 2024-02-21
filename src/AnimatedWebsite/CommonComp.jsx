import React from 'react'
import { Link } from 'react-router-dom';

const CommonComp = ({name, imgSrc, visit, btnName}) => {
    return (
        <>
            <section id="heading" className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row mt-5">
                                <div className="header col-md-6 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className='mb-0'> {name} <strong className='brand-name'>Re@lTech</strong> </h1>
                                    <h4 className="my-4 text-capitalize">We are the team of talented developers making web applications</h4>

                                    <div className="mt-3">
                                        <Link to={visit} className="btn btn-outline-primary rounded-5"> {btnName} </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={imgSrc} alt="home-img" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommonComp;
