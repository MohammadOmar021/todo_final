import React, { useState } from 'react'
import { TextField } from "@mui/material";
import MyBtn from './myBtn';
const MyTextField = ({onChange, value}) => {



  return (
    <div className='mx-3 my-3'>
        <TextField className='md:w-xl' id="outlined-basic" label="Tasks" variant="outlined" placeholder='Enter task to do'  value={value} onChange={onChange}/>
       
    </div>
  )
}

export default MyTextField