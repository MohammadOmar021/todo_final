import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
const MyEdit = ({ onClick }) => {
  return (
   <>
   <EditIcon sx={{cursor:"pointer", marginLeft:1}} onClick={onClick}/>
   </>
  )
}

export default MyEdit