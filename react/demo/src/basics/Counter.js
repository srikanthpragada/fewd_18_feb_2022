import React, { useState } from "react";

export default function Counter() {
  var [value, setValue] = useState(1);

  function increment() {
    setValue(value + 1);
    console.log(value);
  }

  function decrement() {
    setValue(value - 1);
    console.log(value);
  }

  return (
    <>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button onClick={increment}>Inc</button> &nbsp;
      <button onClick={() => decrement()}>Dec</button>
    </>
  );
}
