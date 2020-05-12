import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoListItem extends Component {
     static propTypes={
        onCompletedChange:PropTypes.func
    }

    handleCheckbox=()=>{
        this.props.onCompletedChange(this.props.todo.id)
    }
    render() {
        const todo=this.props.todo
        return (
            <ul>
            <li>
            <input type="checkbox" checked={todo.isCompleted} onChange={this.handleCheckbox}/>
            {todo.title}---{todo.isCompleted?'已完成':'未完成'}</li>
            </ul>
        )
    }
}
