import {combineReducers} from 'redux'
import { START_FETCH_BLOG_LIST, FETCH_BLOG_LIST_SUCCESS, FETCH_BLOG_LIST_FAILED } from './action-types'

const initState={
    list: [],
    isLoading:false,
    errMsg:''
}
function blog(state=initState,action){
    switch(action.type){
        case START_FETCH_BLOG_LIST:
            return {...state,isLoading:true}
        case FETCH_BLOG_LIST_SUCCESS:
            return {...state,isLoading:false,list:action.payload.list,errMsg:''}
        case FETCH_BLOG_LIST_FAILED:
            return {...state,isLoading:false,errMsg:'有些不正常'}
        default:
            return state
    }
}

export default combineReducers({
    blog
})