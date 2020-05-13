import React, {Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoListItem extends Component {
     static propTypes={
        onCompletedChange:PropTypes.func
    }

    handleCheckbox=()=>{
        this.props.onCompletedChange(this.props.todo.id)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState)
    //     return nextProps.completed!==this.props.todo.completed
    // }
    render() {
        console.log(`todoItem ${this.props.todo.title}render`)
        const todo=this.props.todo
        return (
            <ul>
            <li>
            <input type="checkbox" checked={todo.completed} onChange={this.handleCheckbox}/>
            {todo.title}---{todo.completed?'已完成':'未完成'}</li>
            </ul>
        )
    }
}
