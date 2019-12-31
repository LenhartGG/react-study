import React from 'react';

export default class OtherComponent extends React.Component{
  
    constructor(props){
        super(props);
        this.state={num: 'OtherComponent'}
    }
  
    render() {
      return <div>
        Your dice roll:
        {this.state.num}
      </div>;
    }
  };