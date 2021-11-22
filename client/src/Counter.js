import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div style={{ padding: 20, border: "1px solid #ccc" }}>
        <h1>Counter 0</h1>
        <hr />
        <div>
          <button>Add</button>
          <button>Sub</button>
        </div>
      </div>
    );
  }
}

export default Counter;
