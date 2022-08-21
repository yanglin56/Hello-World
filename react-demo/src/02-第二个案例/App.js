import React from 'react';

class App extends React.Component{
constructor(props){
  super(props)
  this.state = {x:1,y:2}
}

// onClick = () =>{
//   this.setState({
//     x: this.state.x + 1,  //2
//   }),()=>{
//     this.setState({
//       x.this.state.x + 1, //2
//     })
//   }
// }

onClick2=()=>{
  this.setState((state)=>({x:state.x+1}))
  this.setState((state)=>({x:state.x+1}))
}

  render(){
    return (
      <div className="App">
        App <button onClick={this.onClick2}>+2</button>
        <B name={this.state.x}/>
      </div>
    )
  }
}

class B extends React.Component {
// UNSAFE_componentWillReceiveProps(newProps:Readonly<p>, nextContext){
UNSAFE_componentWillReceiveProps(){
  console.log('旧的 props')
  console.log(this.props)
  console.log('props变化了')
  console.log('新的 props')
  console.log(newProps)
}

  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default App;