import React from 'react'

const Name = (props) => {
  return (
    // <div>
        <div>
            <input type="text" placeholder="Name" required />
            <button onClick={props.actionProvider.Name}></button>
        </div>
  )
}

export default Name
