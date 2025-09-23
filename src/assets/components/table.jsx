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

export default function BasicTable({ arr, setTaskArr , task}) {
  const [checked, setChecked] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // track which row is being edited
  const [editValue, setEditValue] = useState([{text:'', completed:'false'}]); // track input value for editing

  const changeHandler = (index) => {
    console.log("index in change handler", index);
    setTaskArr((prev)=>{
      const newArr = [...prev]
      newArr[index].completed = true;
      return newArr; 
    })
  };

  const deleteHandler = (index) => {
    setTaskArr((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  const startEditHandler = (index) => {
    setEditIndex(index);
    setEditValue(arr[index].text);
  };

  const saveEditHandler = (index) => {
    setTaskArr((prev) => {
      const newArr = [...prev];
      newArr[index].text = editValue;
      return newArr;
    });
    setEditIndex(null);
    setEditValue('');
  };

  

  return (
    <TableContainer component={Paper} >
      <Table aria-label="simple table" className= "bg-blue-300">
        <TableHead>
          <TableRow sx={{ display: "flex", justifyContent: "space-around" }}>
            <TableCell sx={{ fontWeight: "bolder" }}>Tasks</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bolder" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((value, index) => (
            <TableRow
              key={index}
               className={value.completed ? "bg-green-300" : ""}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 50 }  }
            >
              <TableCell component="th" scope="row">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => saveEditHandler(index)} 
                    onKeyDown={(e) => e.key === 'Enter' && saveEditHandler(index)} 
                    autoFocus
                  />
                ) : (
          <span style={{ textDecoration: value.completed ? "line-through" : "none" }}>
            {value.text}  
          </span>
        )}
              </TableCell>
              <TableCell sx={{ width: 300 }} align="right">
                <MyCheckbox onChange={() => changeHandler(index)}  checked={value.completed} disabled={value.completed}/>
                <Mydelete onClick={() => deleteHandler(index)} />
                <MyEdit onClick={() => startEditHandler(index)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
