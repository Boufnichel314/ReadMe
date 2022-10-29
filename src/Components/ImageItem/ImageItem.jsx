import React from 'react'
import { pure } from 'recompose';
const ImageItem = (props) => {
  return (
    <div>
        <img src={props.bookImage} alt={props.bookName} />
        <h3>{props.bookName}</h3>
        <p>{props.bookPrice}</p>
        <p>{props.bookAuthor}</p>
    </div>
  )
}
export default pure(ImageItem);