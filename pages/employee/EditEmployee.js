import axios from 'axios'
import { useEffect } from 'react'

function EditEmployee(){
    const [id, setId] = useState()

    useEffect(() => {
        axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`)
        .then(res => (){
            console.log(res.data.data)
            setId(id)
        })
    })

}

export default EditEmployee