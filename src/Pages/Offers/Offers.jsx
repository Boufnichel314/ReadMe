import React from 'react'
import { useSelector } from 'react-redux'
import { pure } from 'recompose';
import AnimatedPages from '../../Components/AnimatedPages'
import './offers.css'
const Offers = () => {
  const state = useSelector( state => state.userReducer.username)
const style = {
  display: 'flex',
}
if(state) {
  style.display = 'none'
}
else{
  style.display = 'flex'
}
  return (
    <AnimatedPages>
    <div className='containerr' stytle = {style}>
      <div className='offers'>
      <img className='img' src={require('../../images/Nothing for now.jpg')}  alt="Dostoevsky"/>
      </div>
    </div>
    </AnimatedPages>
  )
}
export default pure(Offers)