import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Router from 'next/router'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DeleteEmployee from './DeleteEmployee';


const useStyles = makeStyles( {
    table: {
        minWidth: 650,
      },
    box: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})



export default function Employee(){
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [employeeList, setEmployeeList] = useState([])
    const [employee_name, setEmployee_name] = useState("")
    const [employee_salary, setEmployee_salary] = useState("")
    const [employee_age, setEmployee_age] = useState("")
    const [newEmployee, setNewEmployee] = useState({
        employee_name: "",
        employee_salary: "",
        employee_age: ""
    })  

  
    const handleDelete = (employeeId) => {
        axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${employeeId}`)
        .then(res => {
            console.log(res.data.data)
            
        
    })
    }
    
     const handleClickOpen = () => {
        setOpen(true);
    };
        
    const handleClose = (e) => {
        setOpen(false);
        e.preventDefault();
        axios.post(`http://dummy.restapiexample.com/api/v1/create`, {name: employee_name, salary: employee_salary, age: employee_age})
        .then(res => {
            
            console.log(res.data.data)
            const newEmployee = {employee_name: res.data.data.name, employee_salary: res.data.data.salary, employee_age: res.data.data.age, employee_id: res.data.data.id}
            employeeList.unshift(newEmployee)
            setEmployeeList([...employeeList])
        
        })

        
          
        
        
    };

    useEffect(() => {
        axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(res => {
            console.log(res.data.data)
            setEmployeeList(res.data.data)
            
            
        })
    }, [])

    console.log(employeeList)

    return(
        <div>
            <TableContainer component={Paper}>
                        <Box className={classes.box}>
                            <Typography variant="h6">
                                Employee details
                            </Typography>
                            <Button variant="contained" color="primary" onClick={handleClickOpen}> 
                                + Add employee
                            </Button>

                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">New Employee</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    Create a new Employee details by proving name, salary and age here.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="email"
                                    value={employee_name} 
                                    onChange={e => setEmployee_name(e.target.value)}
                                    fullWidth
                                />
                                 <TextField
                                    autoFocus
                                    margin="dense"
                                    id="salary"
                                    label="Salary"
                                    type="email"
                                    value={employee_salary} 
                                    onChange={e => setEmployee_salary(e.target.value)}
                                    fullWidth
                                />
                                 <TextField
                                    autoFocus
                                    margin="dense"
                                    id="age"
                                    label="Age"
                                    type="email"
                                    value={employee_age} 
                                    onChange={e => setEmployee_age(e.target.value)}
                                    fullWidth
                                />
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Create
                                </Button>
                                </DialogActions>
                            </Dialog>


                        </Box>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                         
                    <TableRow>
                        <TableCell>Serial Number</TableCell>
                        <TableCell align="right">Employee name</TableCell>
                        <TableCell align="right">Employee Salary</TableCell>
                        <TableCell align="right">Employee Age</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {employeeList.map(eachEmployee => (
                        <TableRow key={eachEmployee.id}>
                        <TableCell component="th" scope="row">
                            {eachEmployee.id}
                        </TableCell>
                        <TableCell align="right"><a>{eachEmployee.employee_name}</a></TableCell>
                        <TableCell align="right">{eachEmployee.employee_salary}</TableCell>
                        <TableCell align="right">{eachEmployee.employee_age}</TableCell>
                        <TableCell align="right">
                            <Box>
                                <Button style={{color: 'yellow'}} ><EditIcon/></Button>
                                <Button style={{color: 'red'}} onClick={() => {handleDelete(eachEmployee.id)}}><DeleteIcon/></Button>
                            </Box>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}