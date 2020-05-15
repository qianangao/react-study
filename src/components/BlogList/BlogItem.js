import React, { Component } from 'react'

export default class BlogItem extends Component {
    render() {
        return (
            <li>
               <h3> {
                   this.props.device_name
               } </h3>
               <h4> {
                   this.props.timestamp
               } </h4>
            </li>
        )
    }
}
