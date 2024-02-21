import React from 'react'
import homeImg from '../AnimatedWebsite/Images/home.svg';
import CommonComp from './CommonComp';

const Home = () => {

    return (
        <>
            <CommonComp
                name="Grow Your IT Businesses & Improve Skills With "
                imgSrc={homeImg}
                visit="/service"
                btnName="Get Started"
            />
        </>
    )
}

export default Home
