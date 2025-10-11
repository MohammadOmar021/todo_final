import React from 'react'
import MyTextField from './myTextField'
import { Margin, Password } from '@mui/icons-material'
import MyBtn from './myBtn'
import { Link } from 'react-router-dom'
import MyLogin from '../../pages/login'
const MysignUp = ({label, span, onChange1, to, onChange2, onClick, show}) => {
  return (
    <>
    
    <div className='w-2xl h-96  shadow-2xl flex justify-center items-center flex-col'>

           {show==true ? <MyTextField  placeholder="Enter Your Name" label="Name" type="text"/> : null}
            <MyTextField  placeholder="Enter Your Email" label="Email" type="text" onChange={onChange1}/>
            <MyTextField  placeholder="Enter Your Password" label="Password" type="password" onChange={onChange2}/>
            <MyBtn label={label}  sx={{ backgroundColor: "green", "&:hover": { backgroundColor: "darkgreen" }, margin:2}} onClick={onClick}/>
           <Link to={to}><span>{span}</span> </Link>
    </div>


    </>
  )
}

export default MysignUp