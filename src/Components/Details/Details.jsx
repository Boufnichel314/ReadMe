import React from 'react'

export default function Details({bookName,bookYear,bookImg}) {
  return (
    <div>
        <h1>{bookName}</h1>
        <h1>{bookYear}</h1>
        <img src={bookImg} alt="book"/>
    </div>
  )
}
