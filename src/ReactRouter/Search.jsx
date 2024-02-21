import React, { useState } from 'react'
import SearchResult from './SearchResult';

const Search = () => {

    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    }

    return (
        <>
            <h3>You Can Search Anything and Get an Images👇</h3>

            <form>
                <input type="text"
                    placeholder='Search Anything'
                    onChange={inputEvent}
                    value={img}
                />
            </form>

            {
                img === "" ? <h3>Please Type Something</h3> : <SearchResult name={img} />
            }
            
        </>
    )
}

export default Search
