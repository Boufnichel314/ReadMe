import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Details from '../Details/Details';
export default function Api(props) {
const [data, setData] = useState([]);
  var search = props.searchValue;
  const searching=(e)=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+`&key=${process.env.REACT_APP_API_KEY}`+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
}
useEffect(() => {
    searching();
  }, [search]);
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', backgroundColor:'black'}}>
      {
        data.map(book => {
                try{
                return(
                <Details
                    key={book.id}
                    bookName={book.volumeInfo.title}
                    bookImg={book.volumeInfo.imageLinks.smallThumbnail}
                    bookAuthor={book.volumeInfo.authors}
                />
                )}
                catch(err) {
                    <Details 
                    key={book.id}
                    bookName={book.volumeInfo.title}
                    bookYear={book.volumeInfo.publishedDate}
                    bookDesc={book.volumeInfo.description}
                    bookLink={book.volumeInfo.infoLink}
                    bookImg={""}
                />
                }
            })
      }
    </div>
  )
}
