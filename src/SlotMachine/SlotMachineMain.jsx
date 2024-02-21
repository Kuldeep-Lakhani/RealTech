import React from 'react'
import SlotMachine from './SlotMachine';

const SlotMachineMain = () => {
    return (
        <>
            <h1 className='slot-title'> 🎰 Welcome to <span style={{ color: "red", fontWeight: "bold" }}> Slot Machine Game </span> 🎰 </h1>

            <div className="slot-machine">
                <SlotMachine x='😄' y='😄' z='😄' />
                <SlotMachine x='😄' y='😎' z='😄' />
                <SlotMachine x='🎅' y='😄' z='😅' />
                <SlotMachine x='🤣' y='😉' z='😄' />
            </div>
        </>
    )
}

export default SlotMachineMain;
