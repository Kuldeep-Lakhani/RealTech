import React from 'react'
import CardData from '../MovieSiteClone/CardData'
import Card from '../MovieSiteClone/Card'

const Netflix = () => {
    return (
        <Card
            key={CardData[0].id}
            imgSrc={CardData[0].imgSrc}
            sName={CardData[0].sName}
            tName={CardData[0].tName}
            link={CardData[0].link}
        />
    )
}

export default Netflix;