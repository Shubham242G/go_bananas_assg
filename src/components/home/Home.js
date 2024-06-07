import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='buttons'>
        <Link className='weather' to='/weather'><Button variant="contained">Weather</Button></Link>
        <Link className='dogs' to='/dogs'><Button className='dogs' variant="contained">Dogs</Button></Link>
      </div>
    </div>
  )
}

export default Home
