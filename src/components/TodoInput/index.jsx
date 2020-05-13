import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }

    static propTypes = {
        addClick: PropTypes.func
    }
    state = {
        inputValue: ''
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleClick = () => {

        if (this.state.inputValue.trim() === '') {
            return
        }
        this.props.addClick(this.state.inputValue)
        this.setState({
            inputValue: ''
        }, () => {
            this.inputRef.current.focus()
        })
    }
    inputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })

    }
    keyupChange = (e) => {
        if (e.keyCode === 13) {
            this.handleClick()
        }

    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.inputChange}
                    onKeyUp={this.keyupChange}
                    ref={
                        this.inputRef
                    }
                />
                <button onClick={this.handleClick}>添加TODO</button>
            </div>
        )
    }
}
