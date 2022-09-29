import React from 'react'
import './details.css'
export default function Details({bookName,bookAuthor,bookImg}) {
  return (
    <div className='details'>
        <div className="image">
        <img className='detailsImg' src={bookImg} alt="book"/>
        </div>
        <div className="title">
        <h1 className='detailsTitle'>{bookName}</h1>
        </div>
    </div>
  )
}
