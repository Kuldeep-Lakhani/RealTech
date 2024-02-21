import React from 'react'

const SearchResult = (props) => {

    const img = `https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <div className="image">
                <img src={img} alt="RandomSearchImages" />
            </div>
        </>
    )
}

export default SearchResult
