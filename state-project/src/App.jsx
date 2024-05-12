import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   count: 0,
    // };

    this.state = {
      name: "",
      surname: "",
    };
  }
  render() {
    // const onPlus = () => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // };

    // const onMinus = () => {
    //   if (this.state.count > 0)
    //     this.setState({
    //       count: this.state.count - 1,
    //     });
    // };
    return (
      <div className="box">
        {/* <button onClick={onPlus}>Plus</button>
        {this.state.count}
        <button onClick={onMinus}>Minus</button> */}
        <input
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({
              name: event.target.value,
            });
          }}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({
              surname: event.target.value,
            });
          }}
          type="text"
          placeholder="SurName"
        />
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>
      </div>
    );
  }
}

export default App;
