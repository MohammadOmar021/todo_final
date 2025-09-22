import React from 'react'
import BasicTable from './table';
import MyTextField from './myTextField'
import MyBtn from './myBtn';
import { TextField } from "@mui/material";
const MainLayout = () => {
  return (
  <>
   <div className='mx-3 my-7 md:w-3xl h-48 md:h-96 border-2 flex flex-col items-center shadow-xl'>
      <div className='md:w-3xl flex justify-center items-center'>
        <MyTextField></MyTextField>
       <MyBtn></MyBtn>
      </div>
     <div className='md:w-2xl'>
        <BasicTable/>
     </div>
   </div>
  </>
  )
}

export default MainLayout