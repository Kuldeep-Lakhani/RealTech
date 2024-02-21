import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoListItems = (props) => {

    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    }

    return (
        <>
            <div className="todo-style">
                {/* <i className="fa-solid fa-circle-xmark" style={{ cursor: "pointer" }}
                    onClick={() => {
                        props.onSelect(props.id)
                    }}>

                </i> */}

                {/* by clicking this span tag icon, the item will be cutting by the line through */}
                <span onClick={cutIt}>
                    {/* In this delete icon component tag taken from the MATERIAL UI */}
                    <DeleteIcon className='dlt-icon' style={{cursor:"pointer"}}/>
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>
    )
}
export default ToDoListItems;

