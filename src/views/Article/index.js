import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Article extends Component {
    render() {
        return (
            <div>
               <Link to="/article/1?from=article">文章一</Link>
               <Link to={{
                   pathname:'/article/2',
                    search: "?sort=name",
                    hash: "#the-hash",
                   state:{from:'artcile_2'}
                   }}>文章二</Link>
            </div>
        )
    }
}
