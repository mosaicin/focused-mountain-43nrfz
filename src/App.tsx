import React, { useState } from 'react';

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-5xl font-bold mb-4">{count}</div>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;