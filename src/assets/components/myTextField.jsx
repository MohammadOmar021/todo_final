import React, { useState } from 'react'
import { TextField } from "@mui/material";
import MyBtn from './myBtn';
const MyTextField = ({onChange, value, placeholder, label, type}) => {



  return (
    <div className='mx-3 my-3'>
        <TextField className='md:w-xl' id="outlined-basic" label={label} variant="outlined" placeholder={placeholder}  value={value} onChange={onChange} type={type}/>
       
    </div>
  )
}

export default MyTextField