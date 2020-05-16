import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Button extends Component {
    goHome = () => {
        //  this.props.history.push('/home')
        this.props.history.push({
            pathname: '/home',
            state: {
                id: this.props.match.params.id
            }
        })
    }
    render() {
        console.log("this.props", this.props);
        
        return (
            <div>
                <button onClick={this.goHome}>返回首页</button> 
            </div>
        )
    }
}

export default withRouter(Button)
