import React from "react";

import './Options.css'

const Options=(props)=>{
    const options=[
        {text:"Got It!",handler:props.actionProvider.handleGotIt,id:1}
    ]

    const buttonOptions=options.map((option)=>(
        <button key={option.id} onClick={option.handler} className="optionButton">
            {option.text}
        </button>
    ))
    return <div>
        <div className="option-container">{buttonOptions}</div>
    </div>
}

export default Options