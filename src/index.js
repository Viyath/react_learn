import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Life Hacks</h1>
      <ul>
        <li>Wake Up</li>
        <li>Eat</li>
        <li>Sleep</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
