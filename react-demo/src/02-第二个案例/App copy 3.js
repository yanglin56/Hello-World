import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class App extends React.PureComponent {
  divRef = undefined;
  constructor(props){
    super(props)
    this.state = {
      n: 1,
      width:undefined
    };
    this.divRef = React.createRef()
  }
  onClick= ()=>{
    this.setState(state=> ({
      n:state.n + 1
    }));
    // {n:1} 和 {n:1}
  };
  componentDidMount(){
    // const div = document.getElementById('xxx')
    // const {width}=div.getBoundingClientRect()
    // this.setState({width})
    const div = this.divRef.current
    console.log(div)
    const {width} = div.getBoundingClientRect()
    this.setState({width})
  }
  render(){
    return (
      // <div id="xxx">hello World,{this.state.width}</div>
      <div ref={this.divRef}>hello World,{this.state.width}</div>
    )
  }
}

export default App;