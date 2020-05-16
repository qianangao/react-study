import React from 'react'
import ReactDOM from 'react-dom'
import {ConfigProvider} from 'antd'
// import zhCN from 'antd/es/locale/zh_CN'
import App from './app'

ReactDOM.render(
    // locale={zhCN}
    <ConfigProvider prefixCls="gq" >
        <App />
    </ConfigProvider>
    
,document.getElementById('root'))