import React, { Component } from 'react'
import {Button,Spin,Badge,Pagination} from 'antd'
export default class App extends Component {
    render() {
        return (
            <div>
                <Button loading type="primary">Button</Button>
                <Spin tip="loading">
                    <div>Further details about the context of this alert.</div>
                </Spin>
                <Badge status="success" text="aaaa" count={10} overflowCount={9}>未读消息</Badge>
                <Pagination defaultCurrent={4} total={50} showSizeChanger showQuickJumper/>
            </div>
        )
    }
}
