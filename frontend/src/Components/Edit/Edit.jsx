import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export default function Edit() {
    const { id } = useParams();
    const [ data, setData] = useState([]);
    const navigate = useNavigate()
    const [Image, setImage] = useState("")
    const [Name, setName] = useState("")
    const [Title, setTitle] = useState("")
    const [Rating, setRating] = useState("")
    const [Category, setCategory] = useState("")
    const [Price, setPrice] = useState("");


    console.log(id,data);
    useEffect(()=>{
        axios.get(`http://localhost:2344/movies/id/${id}`).then((res) => {setData(res.data); setImage(res.data.Image); setName(res.data.Name); setTitle(res.data.Title); setRating(res.data.Rating); setCategory(res.data.Category); setPrice(res.data.Price) })
    },[])



    const handleChange = (event) => {
        setCategory(event.target.value);
      };
    
      const handleUpdatecard = () => {
        const data = {
          Image,
          Name,
          Title,
          Rating,
          Category,
          Price
        }
        if (Title.length  >= 3) {
          console.log("data", data, id)
          axios.patch(`http://localhost:2344/movies/${id}`, data).then((res) => console.log(res.data)).then(() => navigate("/"))
        }
        else {
          alert("Description is to short")
        }
      }
    
      const handleDeleteCard = () => {
        console.log("deke")
        axios.delete(`http://localhost:2344/movies/${id}`).then((res) => alert("Card Deleted Successfully")).then(() => navigate("/"))
    
      }


  return (
    <div className='addmovies'>
      <h1>Update Movies</h1>

      <div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
        >

          {/* image Input */}
          <TextField id="standard-basic" label="Image" value= {Image} variant="standard" onChange={(e) => {
            setImage(e.target.value)
          }} /><br />

          {/* Movies Name Input */}
          <TextField id="standard-basic" label="Name" value={Name} variant="standard" onChange={(e) => setName(e.target.value)} /><br />

          {/* Title Input */}
          <TextField id="standard-basic" label="Title" value={Title} variant="standard" onChange={(e) => {
            setTitle(e.target.value)
          }} /><br />

          {/* Rating Input */}
          <TextField id="standard-basic" label="Rating"  value={Rating} variant="standard" onChange={(e) => {
            setRating(e.target.value)
          }} /><br />

          {/* Category Input */}
          <FormControl >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Category}
              label="Category"
              onChange={handleChange}
              defaultValue={setCategory}
            
            >
              <MenuItem value={"Action"}>Action</MenuItem>
              <MenuItem value={"Adventure"}>Adventure</MenuItem>
              <MenuItem value={"Horror"}>Horror</MenuItem>
            </Select>
          </FormControl> <br /><br />

          {/* Price Input */}
          <TextField id="standard-basic" label="Price" value={Price} variant="standard" onChange={(e) => {
            setPrice(e.target.value)
          }} /><br />

          {/* Add Card Button */}
          <Button variant="contained" onClick={handleUpdatecard} >Update Card</Button><br />
          <Button variant="contained" onClick={handleDeleteCard} >Delete Card</Button>

        </Box>

      </div>
    </div>
  )
}
