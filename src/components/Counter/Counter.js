import React from 'react';
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div>
      <h2 style={{ color: ' #61dafb' }}>Counter</h2>
      <button role="incrementBtn" onClick={increment}>
        +
      </button>
      <small style={{ padding: '0 1.6rem ' }} data-testid="counterValue">
        {counter}
      </small>
      <button role="decrementBtn" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
