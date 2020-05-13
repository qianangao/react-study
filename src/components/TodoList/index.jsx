import React, { Component,Fragment } from 'react'
import TodoListItem from './TodoListItem'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    static propTypes={
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })).isRequired,
        onCompletedChange:PropTypes.func
    }
    render() {
        const {todos}=this.props
        return (
            <Fragment>
                {
                    todos.map(todo=><TodoListItem todo={todo} key={todo.id}  onCompletedChange={this.props.onCompletedChange}/>)
                }
            </Fragment>
        )
    }
}
