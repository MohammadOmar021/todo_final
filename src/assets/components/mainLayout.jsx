import React, { useEffect, useState } from 'react'
import BasicTable from './table';
import MyTextField from './myTextField'
import MyBtn from './myBtn';
import { TextField } from "@mui/material";
const MainLayout = () => {
 
      const [task, setTask] = useState('')
      const [taskArr, setTaskArr] = useState([])


      const taskHandler = (e)=>{
          console.log(e.target.value)
          setTask(e.target.value)
      }


      const addTask = ()=>{
         setTaskArr((prev) => [...prev, task]); 
  setTask(""); 
      
      }
     useEffect(()=>{
          console.log(taskArr)
        }, [taskArr])
  return (
  <>
   <div className='mx-3 my-7 md:w-3xl h-fit md:h-96 flex flex-col items-center  shadow-2xl'>
      <div className='md:w-3xl flex justify-center items-center'>
        <MyTextField onChange={taskHandler} value={task}/>
       <MyBtn onClick={addTask}></MyBtn>
      </div>
    <BasicTable arr={taskArr} setTaskArr={setTaskArr}/>
   </div>
  </>
  )
}

export default MainLayout