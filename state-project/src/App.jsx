import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  render() {
    const plus = () => {
      console.log("plus");
      this.setState({
        count: this.state.count + 1,
      });
    };

    const minus = () => {
      console.log("minus");
      if (this.state.count > 0)
        this.setState({
          count: this.state.count - 1,
        });
    };
    return (
      <div className="box">
        <button className="plus" onClick={plus}>
          Plus
        </button>
        <h1>{this.state.count}</h1>
        <button className="minus" onClick={minus}>
          Minus
        </button>
      </div>
    );
  }
}

export default App;
