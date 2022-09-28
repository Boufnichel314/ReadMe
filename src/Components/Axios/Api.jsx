import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
console.log(data);
  return (
    <div>
    {search}
    </div>
  )
}
