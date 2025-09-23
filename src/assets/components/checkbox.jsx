import React from 'react'
import Checkbox from '@mui/material/Checkbox';
const MyCheckbox = ({onChange, checked, disabled}) => {
  
  const label = { inputProps: { 'aria-label': 'Completed' }  };
  
  
  
  
  return (
   <>
   <Checkbox {...label}   onChange={onChange} checked={checked} disabled={disabled} />
   </>
  )
}

export default MyCheckbox