import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AnimatedPages from '../../Components/AnimatedPages'
import './offers.css'
export default function Offers() {
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
    <Container maxWidth = '80em' style = {{padding:'0', margin : '0'}}>
    <div className='offers_page' stytle = {style}>
      <div className='offers'>
      {/* <img className='img' src={require('../../images/@Readme314 (1).jpg')}  alt="Dostoevsky"/> */}
      </div>
    </div>
    </Container>
    </AnimatedPages>
  )
}