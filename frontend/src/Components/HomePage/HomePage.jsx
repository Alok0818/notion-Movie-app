import "./HomePage.css"
import { Button } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
const navigate = useNavigate()
const[data,setData]= useState([]);
console.log(data);
  useEffect(()=> {
    getData()
  },[]);



  function getData(){
    axios.get("http://localhost:2344/movies").then((res)=> {setData(res.data); console.log(res.data)}).catch((err)=> console.log(err));
  }

  const handleDelete = (id) => {
    // console.log("deke", id)

    axios.delete(`http://localhost:2344/movies/${id}`).then((res) => {getData()})

  }

  return (
    <div>
      {/* <h1>home</h1> */}
      <div className='moviebox'>
      {
        data.map((e) => (
          <div className='movieCard'>
            <img className="img" src={e.Image} alt="" />
            <div className="details">
            <p>Name :- {e.Name}</p>
            <p>Title :- {e.Title}</p>
            <p>Category:- {e.Category}</p>
            <p>Rating :- {e.Rating}</p>
            <p>Price :- $ {e.Price}</p>
            </div>
            <div className="btn">
            <Button  onClick = {() =>{
              console.log(e._id); 
              navigate(`/edit/${e._id}`)
            }} >Edit</Button>

            <Button onClick = {() =>{
            handleDelete(e._id)
            }} >Delete</Button>

            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}
