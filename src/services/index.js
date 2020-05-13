import axios from 'axios'
import apis from './apis'

const service=axios.create({
    baseURL:apis.baseURL

})

export const getTodos=()=>{
    return service.get(apis.todos)
}
