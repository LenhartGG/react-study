import React from 'react';

class TestTryCatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try {
            // 执行操作，如有错误则会抛出
                throw new Error('Error: this is an error!');
                // console.error('Error: this is an error!');
                console.log(new Error("Error: this is an error!"));
                
            
        } catch (error) {
            this.setState({ error });
            console.log(error);
        }
    }

    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>
        }
        return <div onClick={this.handleClick}>Click Me</div>
    }
}

export default TestTryCatch