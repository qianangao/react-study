import React, { Component } from 'react'
import {NavLink as Link,Route,Redirect,Switch} from 'react-router-dom'

import {
    Users,
    Home,
    Article,
    ArticleDetail,
    NotFound
} from './views'


export default class App extends Component {
    state={
        isLogin:true
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/users">用户</Link></li>
                    <li><Link to="/article">文章</Link></li>
                     
                </ul>
                <Switch>
                <Route render={(routeProps)=><Home name="apple" {...routeProps}/>} path="/home" />
                <Route render={(routeProps )=>{
                    return this.state.isLogin
                    ?<Users {...routeProps}/>
                    :<div>请登录</div>
                }} path = "/users" />
                <Route component={Article} path = "/article" exact/>
                <Route component={ArticleDetail} path="/article/:id" />
                <Route component={NotFound} path="/404" />
                <Redirect to="/home" from='/' exact/>
                <Redirect to="/404" />
                </Switch>
            </div>
           
        )
    }
}
