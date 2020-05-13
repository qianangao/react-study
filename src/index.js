import React ,{Fragment,useState,useEffect}from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app'

const Count=()=>{
    // 声明一个新的叫做 “count” 的 state 变量
    //useState 会返回一对值：当前状态和一个让你更新它的函数
    const [count,setCount]=useState(0)
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });



    return (
        <Fragment>
            <span>you clicked {count} times</span>
            <button onClick={()=>setCount(count+1)}>+</button>
            <span>{count}</span>
            <button onClick={()=>setCount(count-1)}>-</button>
        </Fragment>
    )
}

ReactDOM.render(
   <Count />,
  document.getElementById('root')
)
