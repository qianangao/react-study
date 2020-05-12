import React, { Component } from 'react'
import TodoHeader from '../TodoHeader'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import Like from '../Like'

export default class app extends Component {
    state={
        isLike:true,
        todos:[
            {
            id:1,
            title:'吃饭',
            isCompleted:true
            },
            {
            id:2,
            title:'睡觉',
            isCompleted:false
            }
        ]
    }
    addClick=(todo)=>{
        const todoItem={
            id:Math.random(),
            title:todo,
            isCompleted:false
        }
        const todos=[...this.state.todos,todoItem]
        this.setState({
            todos
        })

    }

    onCompletedChange=(id)=>{
        const todos = this.state.todos
        todos.map(todo=>{
           if(todo.id===id){
               todo.isCompleted=!todo.isCompleted
           }
       })
       this.setState({
           todos
       })

    }

    toggleClick=()=>{
        this.setState({
            isLike:!this.state.isLike
        })
        console.log(this.state.isLike);
        
    }
    render() {
        return (
            <div>
                <TodoHeader/>
                <TodoInput addClick={this.addClick}/>
                <TodoList todos={this.state.todos} onCompletedChange={this.onCompletedChange}/>
                < Like isLike = {
                    this.state.isLike
                }
                toggleClick = {
                        this.toggleClick }/ >
            </div>
        )
    }
}
