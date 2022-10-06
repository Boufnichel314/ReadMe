import React from 'react'
import AnimatedPages from '../../Components/AnimatedPages'
import './offers.css'
export default function Offers() {
  return (
    <AnimatedPages>
    <div className='containerr'>
      <div className='offers'>
      <img className='img' src={require('../../images/Nothing for now.jpg')}  alt="Dostoevsky"/>
      </div>
    </div>
    </AnimatedPages>
  )
}
