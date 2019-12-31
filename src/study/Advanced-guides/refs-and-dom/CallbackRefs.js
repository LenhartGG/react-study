import React from 'react';
// import ReactDOM from 'react-dom';

class CustomTextInput extends React.Component {
    constructor(props){
        super(props);

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        }
        
        this.focusTextInput = () => {
            // 使用原生 DOM API 使 text 输入框获得焦点
            if(this.textInput) this.textInput.focus();
        }
    }

    componentDidMount(){
        // autofocus the input on mount
        this.focusTextInput();
    }

    render(){
        // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
        // 实例上（比如 this.textInput）
        return(
            <div>
                <input 
                    type="text" 
                    ref={this.setTextInputRef}
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


// 你可以在组件间传递回调形式的 refs，就像你可以传递通过 React.createRef() 创建的对象 refs 一样。

// function CustomTextInput(props) {
//     return (
//       <div>
//         <input ref={props.inputRef} />
//       </div>
//     );
//   }
  
//   class Parent extends React.Component {
//     render() {
//       return (
//         <CustomTextInput
//           inputRef={el => this.inputElement = el}
//         />
//       );
//     }
//   }
export default CustomTextInput;