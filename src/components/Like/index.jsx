import React, { Component} from 'react'
import PropTypes from 'prop-types'

export default class Like extends Component {
    static propTypes={
        isLike: PropTypes.bool.isRequired,
        toggleClick:PropTypes.func
    }
    handleClick=()=>{
        this.props.toggleClick()
    }
    render() {
        return (
            <div onClick={this.handleClick}>

               {
                   this.props.isLike ? '取消😂' : '确定😀'
               }
            </div>
        )
    }
}
