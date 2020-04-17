import axios from 'axios'

export const getEmployeeDetails = () => {
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
    .then(response => {
        console.log(response.data)
        const {data} = response
        return data
    })
}

