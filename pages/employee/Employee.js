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
    const [employeeList, setEmployeeList] = useState([])
        //save 
    useEffect(() => {
        axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(res => {
            console.log('1111',res.data)
            setEmployeeList(res.data.data)
            
        })
    }, [])

    return(
        <div>
            <TableContainer component={Paper}>
                        <Box className={classes.box}>
                            <Typography variant="h6">
                                Employee details
                            </Typography>
                            <Button variant="contained" color="primary" > 
                                + Add employee
                            </Button>
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
                                <Button style={{color: 'yellow'}}><EditIcon/></Button>
                                <Button style={{color: 'red'}}><DeleteIcon/></Button>
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