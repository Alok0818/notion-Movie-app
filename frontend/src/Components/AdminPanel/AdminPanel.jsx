import React, { useState } from 'react'
import "./AdminPanel.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [Name, setName] = useState("")
  const [Title, setTitle] = useState("")
  const [Rating, setRating] = useState("")
  const [Category, setCategory] = useState("")
  const [Price, setPrice] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddmovie = () => {
    const data = {
      Name,
      Title,
      Rating,
      Category,
      Price
    }

    if (Title.length  >= 3) {
      console.log("data", data)
      axios.post("http://localhost:2344/movies", data).then((res) => console.log(res.data)).then(() => navigate("/"))
    }
    else {
      console.log("length kkk",Title.length)
      alert("Title is to short")
    }
    if(data.length !== 0 ){
      alert("movie added successfully");
    }
    else{
      alert("movie addition failed");
    }

    

  }

  const handleEdit = (e) => {
    e.preventDefault()
    axios.get("http://localhost:2344/movies").then((res) => setData(res.data)).then(() => navigate("/update"))
    console.log("aaaya", data);
    
    
  }

  return (
    <div>
      <h2>Add New Movies</h2>

      <div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
        >
          {/* Movies Name Input */}
          <TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => setName(e.target.value)} /><br />

          {/* Title Input */}
          <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => {
            setTitle(e.target.value)
          }} /><br />

          {/* Rating Input */}
          <TextField id="standard-basic" label="rating" variant="standard" onChange={(e) => {
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
          <TextField id="standard-basic" label="Price" variant="standard" onChange={(e) => {
            setPrice(e.target.value)
          }} /><br />

          {/* Add Card Button */}
          <Button disabled={!Name || !Title || !Rating || !Category || !Price} variant="contained" onClick={handleAddmovie} >Add Movies</Button>

          {/* edit card button */}
          <div className='EditButton'><button value={id} onClick={handleEdit}>Edit</button></div>
        </Box>

      </div>
    </div>
  )
}
