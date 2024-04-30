import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);

  const increaseByOne = () => setCount(count + 1);
  const increaseByThree = () => {
    // setCount(count + 3);
    // setCount(count + 1); // count + 1 == 0 + 1
    // setCount(count + 1); // count + 1 == 0 + 1
    // setCount(count + 1); // count + 1 == 0 + 1

    // Callback : oldState => neState
    // setCount((prev) => prev + 3);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={increaseByOne}>increase</button>
      <button onClick={increaseByThree}>increase by 3</button>
      <h2>count : {count} </h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
