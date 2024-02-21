import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked me ${count} times`;
    })

    return (
        <>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default UseEffect
