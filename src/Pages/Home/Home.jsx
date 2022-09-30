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