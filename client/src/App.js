import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Counter from "./Counter";

class App extends React.Component {
  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + value,
    // });
  }

  render() {
    console.log(this.props);
    return (
      <div className={"App"}>
        <h1>
          Счетчик <strong>{this.props.counter}</strong>
        </h1>

        <hr />

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Вычесть</button>
        </div>

        <Counter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: "ADD" }),
    onSub: () => dispatch({ type: "SUB" }),
    onAddNumber: (number) => dispatch({ type: "ADD_NUMBER", payload: number }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
