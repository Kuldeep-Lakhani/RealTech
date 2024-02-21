import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ComAxios = () => {

    const [num, setNum] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get("https://api.publicapis.org/entries");
            console.log(res);
            setNum(res.data.length);
        }
        getData();
    });

    return (
        <>
            
        </>
    )
}

export default ComAxios;
