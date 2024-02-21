import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Notes from './Notes';

const CreateNote = () => {
    const [noteList, setNoteList] = useState([]);

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const InputEvent = (event) => {
        //Array Destructuring👇
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }
    const addNote = () => {
        if (note.title !== "" && note.content !== "") {
            setNoteList((oldData) => ([...oldData, note]));
        } else {
            alert("Title or Content cannot be blank");
        }
        setNote({
            title: "",
            content: ""
        })
    }

    const onDelete = (id) => {
        setNoteList((oldData) => {
            return oldData.filter((arrData, index) => {
                return index !== id;
            })
        })
    }

    const expandIt = () => {
        setExpand(true);
    }

    const collapseIt = () => {
        setExpand(false);
    }

    return (
        <>
            <div className="main-note">
                <form>
                    {expand ?
                        <input
                            type="text"
                            name='title'
                            value={note.title}
                            onChange={InputEvent}
                            placeholder='Title'
                        /> : null}
                    <textarea
                        cols="30"
                        rows="5"
                        name='content'
                        value={note.content}
                        onChange={InputEvent}
                        placeholder='Type Here!'
                        onClick={expandIt}
                        onDoubleClick={collapseIt}
                    >
                    </textarea>

                    {expand ?
                        <Button onClick={() => addNote()}>
                            <AddIcon className='add-btn' />
                        </Button> : null}
                </form>
            </div>

            {noteList.length !== 0 && noteList.map((val, index) => {
                return (
                    <Notes
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                )
            })}
        </>
    )
}

export default CreateNote;
