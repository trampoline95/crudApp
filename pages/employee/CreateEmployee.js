import axios from 'axios'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }))


function CreateEmployee()  {
    const classes = useStyles();

    const[newEmployee, setEmployee] = useState({
        name: "",
        salary: "",
        age: ""
    })
    
    const Handle = (e) => {
        const newCreatedEmployee = {...newEmployee}
        newCreatedEmployee[e.target.className] = e.target.value
        setEmployee(newCreatedEmployee)
    }

    const Submit = (e) => {
        e.preventDefault();
        axios.post(`http://dummy.restapiexample.com/api/v1/create`, {newEmployee})
        .then(res => {
            console.log(res.data)
        })
    }
   

    return(
        <div>
             <form className={classes.root} noValidate autoComplete="off" onSubmit={e => Submit(e)}>

                <TextField id="outlined-basic"
                 label="Employee name" 
                 variant="outlined" 
                 className="name" 
                 value={newEmployee.name} 
                 onChange={e => Handle(e)}/>

                <TextField id="outlined-basic" 
                label="Employee salary" 
                variant="outlined"
                className="salary" 
                value={newEmployee.salary} 
                onChange={e => Handle(e)}/>

                <TextField id="outlined-basic" 
                label="Employee age" 
                variant="outlined" 
                className="age" 
                value={newEmployee.age} 
                onChange={e => Handle(e)}/>

               <Button variant="contained" color="primary" >Create</Button >
            </form>
            
        </div>
    )

}

export default CreateEmployee;