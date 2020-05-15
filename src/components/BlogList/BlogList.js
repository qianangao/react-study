import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import BlogItem from './BlogItem'
import {
    fetchBlogList
} from '../../reducers/actions'

class BlogList extends Component {
    componentDidMount() {
        this.props.fetchBlogList()
    }


    render() {
        console.log(this.props);

        const {
            blog,
            isLoading,
            errMsg
        } = this.props
        const errorMsg = Boolean(errMsg)
        console.log(errorMsg);

        return (
            isLoading ?
            <div> Loading... </div> :
             (
                errorMsg ? 
                <div>{errMsg}</div>
                :
                <ul> 
                {
                blog.map(item => <BlogItem key = {item.alarm_id} {...item}/>)
                }
                </ul>
            )    
            )
        }
    }

    const mapState = state => ({
        blog: state.blog.list,
        isLoading: state.blog.isLoading,
        errMsg: state.blog.errMsg
    })
    export default connect(mapState, {
        fetchBlogList
    })(BlogList)