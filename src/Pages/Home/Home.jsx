import { useState } from 'react'
import { useSelector } from 'react-redux'
import AnimatedPages from '../../Components/AnimatedPages'
import './home.css'
export default function Home() {
const state = useSelector( state => state.userReducer.username )
const style = {
  display: 'flex',
}
if(state === 'Enter'){
  style.display = 'none'
}
else{
  style.display = 'flex'
}
  return (
    <AnimatedPages>
    <div className='containerr home' style={style}>
      <div className="home-container">
      <div className="home-title">
          <div className="title">
            <h1>ReadMe</h1>
            <p> <span> ريدمي </span>هي مكتبة لبيع كل الكتب بالعربية <br /> والفرنسية و الانجليزية و في جميع المدن المغربية</p>
          </div>
        </div>
        <div className="home-img">
        <img className='img' src={require('../../images/lastdost2.png')}  alt="Dostoevsky"/>
        </div>
      </div>
    </div>
    </AnimatedPages>
  )
}