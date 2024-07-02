import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15;
  const addValue = () => {
    counter++;
    setCounter(counter);
    console.log("added", counter);
  }

  const removeValue = () => {
    setCounter(counter-1);
    console.log("removed", counter);
  }
  return (
    <>
      <h1>Sahil Lamture learning React from HHItesh Choudhary</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
