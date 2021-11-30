import React from 'react';
import FunctionalApp from './FunctionalApp'
import MultipleProps from './MultipleProps'

class App extends React.Component {
  state = {
    count: 0,
    name: ""
  }

  componentDidMount(){
    console.log("mounted")
  }

  componentDidUpdate(){
    console.log("updated")
  }

  render(){
    return(
      <div>
        <div style={{textAlign: "center", marginTop: "40px", fonSize: "45px"}}>
          {this.state.count}<br />
          <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => this.setState({count: this.state.count - 1})}> - </button>
          <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => this.setState({count: this.state.count + 1})}> + </button>
        </div>
        <h2>FUNCTIONAL APP</h2>
        <FunctionalApp count={this.state.count} />
        < MultipleProps count={this.state.count} name={this.state.name} />
      </div>
    )
  }
}

export default App;
