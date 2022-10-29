import React from 'react'
import './details.css'
import { pure } from 'recompose';
const Details = ({bookName,bookImg}) => {
  return (
    <a href="https://wa.me/+212771487686">
    <div className='details'>
        <div className="image">
        <img className='detailsImg' src={bookImg} alt="book"/>
        </div>
        <div className="title">
        <h1 className='detailsTitle'>{bookName}</h1>
        </div>
    </div>
    </a>
  )
}
export default pure(Details);