import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAge, addName } from '../../redux/Action'
import { useNavigate } from 'react-router-dom'
import './Exit.css'
const Exit = () => {
  const navigate=useNavigate();
  const btnClick=()=>{
    navigate("/")
  }
  const dispatch=useDispatch()
  const {name,age}=useSelector((state)=>state.detail)
    useEffect(()=>{
      dispatch(addName(localStorage.getItem("name")
      ? JSON.parse(localStorage.getItem("name"))
      : ""))
      dispatch(addAge(localStorage.getItem("age")
      ? JSON.parse(localStorage.getItem("age"))
      : ""))
    },[dispatch])
    
  return (
    <div className='exitContainer'>
      <h1>{`Your name ${name[0]} aged ${age[0]} has been added to student system`}</h1>
      <h3>You may now exit</h3>
      <button onClick={btnClick}>Exit</button>
    </div>
  )
}

export default Exit
