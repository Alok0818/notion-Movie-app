import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Edit() {
    const { id } = useParams();
    const [ data, setData] = useState([]);


    console.log(id,data);
    useEffect(()=>{
        axios.get(`http://localhost:2344/movies/id/${id}`).then((res) => setData(res.data))
    },[])
  return (
    <div>
      <h1>Edit</h1>

    </div>
  )
}
