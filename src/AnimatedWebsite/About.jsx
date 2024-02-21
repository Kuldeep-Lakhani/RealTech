import React from 'react'
import aboutImg from '../AnimatedWebsite/Images/about.avif';
import CommonComp from './CommonComp'

const About = () => {
    return (
        <>
            <CommonComp
                name="Get To Know About Us"
                imgSrc={aboutImg}
                visit="/contact"
                btnName="Contact Now"
            />
        </>
    )
}

export default About
