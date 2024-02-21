import React from "react";
import '../MovieSiteClone/movieSite.css';

function Card({ id, imgSrc, sName, tName, link }) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={imgSrc} alt={tName} />
                    <div className="card-info">
                        <span className="card-category"> {sName} </span>
                        <h3 className="card-title"> {tName} </h3>
                        <a href={link} target="_blank" rel="noreferrer"> Watch Now </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;