// src/exercises/week-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

   function handleAdd() {
    setCount(prevCount => prevCount + 1); // Use the previous state to ensure correct updates
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The issue was that the state was being mutated directly using `count += 1`, which does not trigger a re-render in React. 
// By using `setCount(prevCount => prevCount + 1)`, we ensure that we are creating a new state value based on the previous state, 
// which allows React to properly track and update the component when the state changes.
