import {
    START_FETCH_BLOG_LIST,
    FETCH_BLOG_LIST_FAILED,
    FETCH_BLOG_LIST_SUCCESS
} from './action-types'
import {getBlogs} from '../services'

const startFetchBlogList = () => ({
    type: START_FETCH_BLOG_LIST
})
const fetchBlogListSuccess = (payload) => ({
    type: FETCH_BLOG_LIST_SUCCESS,
    payload
})
const fetchBlogListFailed = () => ({
    type: FETCH_BLOG_LIST_FAILED
})

export const fetchBlogList=()=>dispatch=>{
    dispatch(startFetchBlogList())
    getBlogs().then(res=>{
        console.log(res);
        if(res.status===200){
            dispatch(fetchBlogListSuccess({
                list:res.data.data.items
            }))
        }else{
            dispatch(fetchBlogListFailed())
        }
        
    }).catch(err=>{
        console.log("err",err);
        dispatch(fetchBlogListFailed())
    })

}