import React, { useState } from 'react'
//import icons from material UI:-
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import "../IncDecApp/IncreDecre.css"

const IncreDecre = () => {
    const [num, setNum] = useState(0);

    const increNum = () => {
        setNum(num + 1);
    }

    const decreNum = () => {
        setNum(num - 1);
        if (num === 0) {
            setNum(0);
            alert("Number can't be negative");
        }
    }
    return (
        <>
            <div className='main-div'>
                <div className="box-div">
                    <h1 className='dis-num'> {num} </h1>
                    <div className="buttons">
                        <Tooltip title="Add" arrow>
                            <Button onClick={increNum}><AddIcon /></Button>
                        </Tooltip>

                        <Tooltip title="Remove" arrow>
                            <Button onClick={decreNum}><RemoveIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncreDecre;