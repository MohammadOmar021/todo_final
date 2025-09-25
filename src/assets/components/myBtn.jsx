import React from 'react'
import { Button } from "@mui/material";
const MyBtn = ({onClick, label, sx}) => {
  return (
 <>
<div className='mx-3'>
     <Button variant="contained" onClick={onClick} sx={sx}>{label}</Button>
</div>
 </>
  )
}

export default MyBtn