import React from 'react';
// import ReactDOM from 'react-dom';

function CustomTextInput() {

    let textInut = React.createRef();

    function handleClick(){
        textInut.current.focus();
    }

    return(
        <div>
            <input 
                type="text" 
                ref={textInut}
            />
            <input 
                type="button" 
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    );
}

export default CustomTextInput;