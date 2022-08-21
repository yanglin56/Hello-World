import React from 'react';

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      n: 1
    };
  }
  onClick= ()=>{
    this.setState(state=> ({
      n:state.n + 1
    }));
    this.setState(state=> ({
      n:state.n - 1
    }));
    // {n:1} 和 {n:1}
  };
  // shouldComponentUpdate(newProps,newState){
  //   if(newState.n===this.state.n){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  render(){
    const x=(
      <>
        <div>hi</div>
        <div>
        App
        <div>
        {this.state.n}
        <button onClick={this.onClick}>+1</button>
        </div>
      </div>
      </>
    )
    console.log(x)  //虚拟DOM
    return x;
  }
}


export default App;