import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';

const Notes = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="notes">
                <div className="note">
                    <h5> {props.title} </h5>
                    <p> {props.content} </p>
                    <Button className='dlt-btn' onClick={deleteNote}>
                        <DeleteOutlineIcon className='dlt-icon' />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Notes;
