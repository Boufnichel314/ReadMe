import React from 'react'
import './categories.css'
import Dostoevsky from './Dostoevsky/Dostoevsky'
import dost from '../../images/dostoevsky_photo.jpg'
import Agatha from '../../Components/Categories/Agatha/images/Agatha_Christie.png'
export default function Categories() {
  const data = [
    {
      name : 'Dostoevsky',
      profile : dost,
    },
    {
      name : 'Agatha',
      profile : Agatha,
    },
  ]
  return (
    <div className='categories'>
        <Dostoevsky profile = {dost} Author = 'Fyodor Dostoevsky' data = {data}/>
        <Dostoevsky profile = {Agatha} Author = 'Agatha Christie' data= {data} />
        {/* <Dostoevsky/>
        <Dostoevsky/>
        <Dostoevsky/>
        <Dostoevsky/> */}
    </div>
  )
}
