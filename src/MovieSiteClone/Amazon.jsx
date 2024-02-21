import React from 'react'
import CardData from '../MovieSiteClone/CardData'
import Card from '../MovieSiteClone/Card'

const Amazon = () => {
    return (
        <Card
            key={CardData[3].id}
            imgSrc={CardData[3].imgSrc}
            sName={CardData[3].sName}
            tName={CardData[3].tName}
            link={CardData[3].link}
        />
    )
}

export default Amazon;