import React from 'react';

export default class AnotherComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={num: 'AnotherComponent'}
    }
  
    render() {
      return <div>
        Your dice roll:
        {this.state.num}
      </div>;
    }
  };