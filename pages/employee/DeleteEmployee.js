import axios from 'axios'
import { useState, useEffect } from 'react'

function DeleteEmployee({value}){

    
    const[id, setId] = useState()

    
        axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
        .then(res => {
            console.log(res.data.data)
            setId(value)
        
    })
   
}

export default DeleteEmployee;
