import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyBtn from './myBtn';
import MyCheckbox from './checkbox';
import { useState } from 'react';

import Mydelete from './delete';
import MyEdit from './Edit';


const rows = [
  
];




export default function BasicTable({arr, setTaskArr}) {


arr.map((index, value)=>{
      console.log("index and Value", index, value)
})

// const [arr1, setArr1]  = useState(arr);

const deleteHandler = (index)=>{
     setTaskArr((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      return newArr;
    });
}

const [checked, setChecked] = useState(false)

const changeHandler=(index)=>{
    setChecked(true)
}

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow sx={{display:"flex", justifyContent:"space-around"}}>
            <TableCell sx={{fontWeight:"bolder"}}>Tasks</TableCell>
            <TableCell align="right" sx={{fontWeight:"bolder"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((value, index) => (
            <TableRow
              key={value}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, height:50}}
            >
              <TableCell component="th" scope="row">
                {value}
              </TableCell>
              <TableCell sx={{width:300}} align="right">{<MyCheckbox  onchange={()=>{changeHandler(index)}} checked={checked} />}{<Mydelete onClick={() => deleteHandler(index)} />}{<MyEdit  index={index} />}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
