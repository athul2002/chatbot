import React from 'react'
import "./Home.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container'>
        <h1>Enter into Student Info System</h1>
        <Button>
            <Link to='/chat'>
                Enroll Now!
            </Link>
        </Button>
    </div>
  )
}

export default Home
