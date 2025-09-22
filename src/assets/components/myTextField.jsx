import React from 'react'
import { TextField } from "@mui/material";
import MyBtn from './myBtn';
const MyTextField = () => {
  return (
    <div className='mx-3 my-3'>
        <TextField className='md:w-xl' id="outlined-basic" label="Tasks" variant="outlined" placeholder='Enter task to do'/>
       
    </div>
  )
}

export default MyTextField