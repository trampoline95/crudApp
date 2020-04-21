import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react'
import axios from 'axios'

export default function FormDialog({eachEmployee, handleUpdate}) {
  const [open, setOpen] = useState(false);
  const[name, setName] = useState(eachEmployee.employee_name)
  const[salary, setSalary] = useState(eachEmployee.employee_salary)
  const[age, setAge] = useState(eachEmployee.employee_age)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    

    };
    const handleSubmit = () => {
      const data = {employee_name: name, employee_salary: salary, employee_age: age, id: eachEmployee.id}
      axios.put(`http://dummy.restapiexample.com/api/v1/update/${eachEmployee.id}`,{data})
      .then(res => {
        console.log(res.data)
        handleUpdate(data)
        handleClose()
      })
    }

  
  return (
    <div>
      <Button style={{color: 'yellow'}} onClick={handleClickOpen}><EditIcon/></Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit details by changing name,salary and age
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Salary"
            type="email"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Age"
            type="email"
            value={age}
            onChange={e => setAge(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            update
          </Button>
          
           
        </DialogActions>
      </Dialog>
    </div>
  );
}
