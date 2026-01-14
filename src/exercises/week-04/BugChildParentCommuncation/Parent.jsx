import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// EXPLANATION: In this Parent component, I maintain a state variable 'count' to track the counter value.
// I define an 'increment' function that updates this state by incrementing the count by 1.
// This function is passed down to the Child component as a prop named 'onIncrement'.
// When the button in the Child component is clicked, it calls this function, allowing the Child to communicate with the Parent and update its state.
