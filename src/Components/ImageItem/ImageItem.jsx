import React from 'react'

export default function ImageItem(props) {
  return (
    <div>
        <img src={props.bookImage} alt={props.bookName} />
        <h3>{props.bookName}</h3>
        <p>{props.bookPrice}</p>
        <p>{props.bookAuthor}</p>
    </div>
  )
}
