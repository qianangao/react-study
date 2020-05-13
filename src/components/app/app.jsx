import React, { Component } from 'react'
import TodoHeader from '../TodoHeader'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import Like from '../Like'
// import {getTodos} from '../../services'
// import axios from 'axios'
export default class app extends Component {
    state={
        isLike:true,
        todos:[
            {
            id:1,
            title:'吃饭',
            completed:true
            },
            {
            id:2,
            title:'睡觉',
            completed:false
            }
        ]
    }

    componentDidMount() {
        console.log('111111111')
        // axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
        //     console.log(res)
        // })
        // getTodos()
        //     .then(res=>{
        //         console.log("res",res)
        //         if(res.status===200){
        //             this.setState({
        //                 todos:res.data
        //             })
        //         }
        //     })
        //     .catch(err=>{
        //         console.log("err",err)
        //     })
    }

    addClick=(todo)=>{
        const todoItem={
            id:Math.random(),
            title:todo,
            completed:false
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
               todo.completed=!todo.completed
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
                        this.toggleClick } />
            </div>
        )
    }
}
