import React from 'react';
import ReactDOM from 'react-dom';

import CustomTextInput from './refs-and-dom/CustomTextInput.js';
import AutoFocusTextInput from './refs-and-dom/AutoFocusTextInput.js';
import CustomTextInputFunction from './refs-and-dom/CustomTextInputFunction.js';
import CallbackRefs from './refs-and-dom/CallbackRefs';

import FancyButton from './forward-refs/FancyButton';

import Table from './fragments/Table';
import Glossary from './fragments/Glossary';

import MouseTracker from './Render-Props/MouseTracker';

class CreateButton extends React.Component{
    render(){

        const FancyButton = React.forwardRef((props, ref) => (
            <button ref={ref} className="FancyButton">
                {props.children}
            </button>
        ));
        // 你可以直接获取 DOM button 的 ref：
        const ref = React.createRef();
        
        return(
            <FancyButton ref={ref}>Click me!</FancyButton>
        )
    }
}
  
  

function MyComponents(){
    var items = [
        {
            id: 1,
            term: 'first',
            description: 'first blood'
        },
        {
            id: 2,
            term: 'second',
            description: 'second blood'
        }
    ]
    return(
        <div>
            <CreateButton />
            <CustomTextInput />
            <AutoFocusTextInput />
            <CustomTextInputFunction />
            <CallbackRefs />
            
            <FancyButton />
            <Table />
            <Glossary items={items} />
            
            <MouseTracker />
        </div>
    );
}

ReactDOM.render(
    <MyComponents />,
    document.getElementById("root")
)