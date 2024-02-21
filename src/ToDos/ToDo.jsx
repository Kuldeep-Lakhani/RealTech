import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ToDoListItems from '../ToDos/ToDoListItems';
import '../ToDos/todo.css';

const ToDo = () => {

    const [inputList, setInputList] = useState();
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const displayItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className='main-div'>
                <div className="todo-div">
                    <h1 className='todo-title'>ToDo📃 List</h1>
                    <div className='input-btn'>
                        <input type="text"
                            placeholder='Add a Items'
                            onChange={itemEvent}
                            value={inputList}
                        />
                        <Button className='add-btn' onClick={displayItem} variant='contained'>
                            <AddIcon />
                        </Button>
                    </div>
                    <ol>
                        {items.map((itemVal, index) => {
                            return (
                                <ToDoListItems
                                    key={index}
                                    id={index}
                                    text={itemVal}
                                    onSelect={deleteItem}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ToDo;