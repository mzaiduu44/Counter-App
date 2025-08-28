import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(5);

  const handleAddVal = () => {
    console.log(count);
    count = count + 5;
    setCount(count);
  };
  const handleDecVal = () => {
    console.log(count);
    if (count > 0) {
      count = count - 5;
    }
    setCount(count);
  };
  return (
    <>
      <h1>Hooks</h1>
      <h2>Counter is: {count}</h2>
      <div>{count}</div>
      <p> count is{count}</p>

      <button onClick={handleAddVal}>Increse Count</button>
      <button onClick={handleDecVal}>Decrease Count</button>
    </>
  );
};

export default App;
