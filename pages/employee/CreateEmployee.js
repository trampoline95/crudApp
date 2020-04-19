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

  

    const [employee_name, setEmployee_name] = useState("")
    const [employee_salary, setEmployee_salary] = useState("")
    const [employee_age, setEmployee_age] = useState("")
    
   
       
    const Submit = (e) => {
        e.preventDefault();
        axios.post(`http://dummy.restapiexample.com/api/v1/create`, {name: employee_name, salary: employee_salary, age: employee_age})
        .then(res => {
            console.log(res.data.data)
        })
    }
   

    return(
        <div>
             <form className={classes.root} noValidate autoComplete="off" onSubmit={e => Submit(e)}>

                <input
                 label="outlined" 
                 className="name" 
                 value={employee_name} 
                 onChange={e => setEmployee_name(e.target.value)}/>

                <input  
                label="Employee salary" 
                className="salary" 
                value={employee_salary} 
                onChange={e => setEmployee_salary(e.target.value)}/>

                <input 
                label="Employee age" 
                className="age" 
                value={employee_age} 
                onChange={e => setEmployee_age(e.target.value)}/>

               <button>Create</button>
            </form>
            
        </div>
    )

}

export default CreateEmployee;