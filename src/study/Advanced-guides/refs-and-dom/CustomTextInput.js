import React from 'react';
// import ReactDOM from 'react-dom';

class CustomTextInput extends React.Component{
    constructor(props){
        super(props);
        this.textInut = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput(){
        this.textInut.current.focus();
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    ref={this.textInut}
                />
                <input 
                    type="button" 
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default CustomTextInput;