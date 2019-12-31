/**
 * Created by mapbar_front on 2019/8/2.
 */
import React,{Component} from 'react';

function handleClick(ref){
    console.log('ref',ref.current);
}
const FancyButton = React.forwardRef((props,ref)=>(
    <button ref={ref} {...props} onClick={ ()=>handleClick(ref) }>
        {props.children}
    </button>
));

class Refs extends Component{
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    handleClick= (ref)=>{
        alert(1);
    }
    render(){
        return(
            <div>
                <FancyButton
                    ref={this.ref}
                    //onClick={ ()=>this.handleClick(this.ref)}
                >
                    点我
                </FancyButton>
            </div>
        )
    }
}
export default Refs;