import React from 'react'
import {Link} from 'react-router-dom'
import RotoCoin from '../assets/videos/rotocoin.mp4'
import './home.css'

function home() {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src={RotoCoin} type="video/mp4" />
      </video>
      <div className="video-overlay">
        <h1 className='text-6xl font-bold text-white mb-6'>Welcome to  Cryptify</h1>
        <Link to='/main' className="bg-white text-black px-6 py-3 rounded-md shadow-md" >
          Enter
        </Link>
      </div>
    </div>
  )
}

export default home