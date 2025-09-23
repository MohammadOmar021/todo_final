import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const Mydelete = ({onClick}) => {
  
   
//   const deleteHandler=()=>{

//         arr.splice(index,1)
//         console.log("Deleted")
//         console.log("Updated Array", arr)

//   }
  
    return (
    <>
    <DeleteIcon sx={{cursor:"pointer", }} onClick={onClick} />
    </>
  )
}

export default Mydelete