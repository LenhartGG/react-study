import React from 'react';

/**
 * 例如，以下组件跟踪 Web 应用程序中的鼠标位置：
 */
class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state = { x: 0, y: 0 }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render(){
        return (
            <div style={{ width: '200px', height: '200px', border: '1px solid blue' }} 
                onMouseMove={this.handleMouseMove}>
                <h1>移动鼠标!</h1>
                <p>当前鼠标的位置是：({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}

export default MouseTracker;