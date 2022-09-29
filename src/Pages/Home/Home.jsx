import { useState } from 'react'
import AnimatedPages from '../../Components/AnimatedPages'
import ImageItem from '../../Components/ImageItem/ImageItem';
import img from '../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg'
import './home.css'
export default function Home() {
  return (
    <AnimatedPages>
    <div className='containerr home'>
      <div className="home-container">
        <div className="home-img">
        {/* <img className='img' src={require('../../images/fyodor.png')}  alt="Dostoevsky"/> */}
        </div>
      </div>
    </div>
    </AnimatedPages>
  )
}