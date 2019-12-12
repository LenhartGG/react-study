import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        //在这个回调函数中使用 this
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render(){
        return(
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

class LoggingButton extends React.Component{
    // handleClick = () => {
    //     console.log(this);
    // }
    handleClick(){
        console.log(this);
    }
    
    render(){
        return (
            <div>
                {/* <button onClick={this.handleClick}> */}
                <button onClick={(e) => this.handleClick(e)}>
                    Click me!
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root4')
)

ReactDOM.render(
    <LoggingButton></LoggingButton>,
    document.getElementById('root5')
)