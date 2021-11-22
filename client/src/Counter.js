import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div style={{ padding: 20, border: "1px solid #ccc" }}>
        <h1>Counter {this.props.counter}</h1>
        <hr />
        <div>
          <button>Add</button>
          <button>Sub</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state,
  };
}

export default connect()(Counter);
