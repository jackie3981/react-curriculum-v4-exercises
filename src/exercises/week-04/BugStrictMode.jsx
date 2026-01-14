// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// The counter increases by 2 due to Strict Mode (which is active only in development mode).
// React mounts and unmounts the component twice to help identify unsafe side effects.
// As a result, the `useEffect` hook runs twice. Each execution of `useEffect` creates a `setInterval`,
// leading to two active intervals. This causes the counter to increment by 2 each time.
// This can be solved in two ways:
// 1- by removing <React.StrictMode> from the main.jsx file
// 2- by creating a variable to store the interval ID and clear it, thus ensuring that it increments by 1 each time.
