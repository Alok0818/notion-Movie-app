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

  function handlesortprice(e) {
    if (e.target.value === "low") {
      // getdata.sort((first, second) => first.username - second.username);
      data.sort((a, b) => a.Price - b.Price)
      setData([...data]);
    } 
    else if (e.target.value === "high") {
      data.sort((a, b) => b.Price-a.Price)
      setData([...data]);
    }
  }

  function handlesortrating(e) {
    if (e.target.value === "low") {
      // getdata.sort((first, second) => first.username - second.username);
      data.sort((a, b) => a.Rating - b.Rating)
      setData([...data]);
    } 
    else if (e.target.value === "high") {
      data.sort((a, b) => b.Rating-a.Rating)
      setData([...data]);
    }
  }

  function handlesortcategory(e) {
    if (e.target.value === "low") {
      // getdata.sort((first, second) => first.username - second.username);
      data.sort((a, b) => a.Category - b.Category)
      setData([...data]);
    } 
    else if (e.target.value === "high") {
      data.sort((a, b) => b.Category-a.Category)
      setData([...data]);
    }
  }

  return (
    <div className="main">
      {/* <h1>home</h1> */}
      <div className="filter">
      <span >
      <h2>SORT BY PRICE</h2>
          <button className="btn1" value={"high"} onClick={handlesortprice}>
            HIGH
          </button><br /><br />
          <button className="btn1" value={"low"} onClick={handlesortprice}>
            LOW
          </button>
      </span>
      <span>
      <h2>SORT BY Rating</h2>
          <button className="btn1" value={"high"} onClick={handlesortrating}>
            HIGH
          </button><br /><br />
          <button className="btn1" value={"low"} onClick={handlesortrating}>
            LOW
          </button>
      </span>
      {/* <span>
      <h2>SORT BY Category</h2>
          <button className="btn1" value={"Action"} onClick={handlesortcategory}>
          Action
          </button><br /><br />
          <button className="btn1" value={"Adventure"} onClick={handlesortcategory}>
          Adventure
          </button><br /><br />
          <button className="btn1" value={"Horror"} onClick={handlesortcategory}>
          Horror
          </button><br /><br />
          <button className="btn1" value={"Comedy"} onClick={handlesortcategory}>
          Comedy
          </button>
      </span> */}
      </div>
          
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
