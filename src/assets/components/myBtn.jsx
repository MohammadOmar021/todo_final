import React from 'react'
import { Button } from "@mui/material";
const MyBtn = ({onClick}) => {
  return (
 <>
<div className='mx-3'>
     <Button variant="contained" onClick={onClick}>ADD TASK</Button>
</div>
 </>
  )
}

export default MyBtn