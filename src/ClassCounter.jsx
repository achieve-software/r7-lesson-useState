import React from 'react' 
export default class ClassCounter extends React.Component {
    constructor(props) {
        super(props)        //!  State'e baslangi degeri verdik.
        this.state = {
          count: 0,
        }
    }   
     increment = () => {
        this.setState({
          count: this.state.count + 1,
        })
      }  
          decrement = () => {
        this.setState({
          count: this.state.count - 1,
        })
      } 
       render() {
    return (
      <div className="container text-center mt-4">
        <h2 className="text-danger">Class Components</h2>
        <h1 className="display-4">Count:{this.state.count}</h1>
        <button onClick={this.increment} className="btn btn-success">
          INC
        </button>
        <button
          onClick={() => this.setState({ count: 0 })}
          className="btn btn-danger"
        >
          CLR
        </button>
        <button onClick={this.decrement} className="btn btn-warning">
          DEC
        </button>
      </div>
    )
  }
}