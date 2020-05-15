import axios from 'axios'

const instance =axios.create({
    baseURL: 'http://10.202.22.24:5857/api/v1/'
})

export const getBlogs=()=>{
    return instance.post('/alarm/employee')
}