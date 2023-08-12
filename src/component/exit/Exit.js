import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Exit.css'
const Exit = () => {
  const navigate=useNavigate();
  const btnClick=()=>{
    navigate("/")
  }

  const {name,age}=useSelector((state)=>state.detail)
  return (
    <div className='exitContainer'>
      {name.length>0?<h1>{`Your name ${name} aged ${age} has been added to student system`}</h1>:<h1>Please Enroll Yourself before accessing this page</h1>}
      <h3>You may now exit</h3>
      <button onClick={btnClick}>Exit</button>
    </div>
  )
}

export default Exit
