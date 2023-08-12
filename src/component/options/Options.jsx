import React, {useState } from "react";

import './Options.css'

const Options=(props)=>{
    const [show,setShow]=useState(true)

    const options=[
        {text:"Got It!",id:1},
    ]
    const clickHandler=()=>{
        setShow(false);
        props.actionProvider.handleGotIt()
    }
    const buttonOptions=options.map((option)=>(
        <button key={option.id} onClick={clickHandler} style={{display: show ? 'block' : 'none' }} className="optionButton">
            {option.text}
        </button>
    ))
    return <div>
        <div className="option-container">{buttonOptions}</div>
    </div>
}

export default Options