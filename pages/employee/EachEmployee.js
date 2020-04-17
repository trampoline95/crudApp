import { useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function EachEmployee(){
    const classes = useStyles();
    const [eachEmployee, setEmployee] = useState({})
    const [id, setId] = useState(1)
        //save 
    useEffect(() => {
        axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then(res => {
            console.log(res.data)
            setEmployee(res.data.data)
            
        })
    }, [id])

    return(
        <div>
             <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <h1>{eachEmployee.employee_name}</h1>
        </div>
    )
}