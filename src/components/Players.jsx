import React, { useState } from 'react'

export default function Players({ name, symbol, isActive, onSetPlayerName }) {
    const [isEditing, setEditing] = useState(false);
    const [userName, setInputUserName] = useState(name);
    function handleClick(){
        setEditing((prevs)=> !prevs);
        if(isEditing){
            onSetPlayerName(symbol,userName)
        }
    }
    function handleInputName(event) {
        const value = event.target.value;
        setInputUserName(value);
    }


    return (
        <li className={isActive ? "active" : null}>
            <span className='player'>
                {
                    isEditing ? <input type="text" onChange={handleInputName} value={userName}></input> :
                        <span className="player-name">{userName ? userName : name}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}
