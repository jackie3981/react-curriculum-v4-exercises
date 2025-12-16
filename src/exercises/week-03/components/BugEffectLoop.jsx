  //src/exercises/week-03/BugEffectLoop.jsx

  /* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from "react";

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  },[]); // Added empty dependency array to run effect only once on mount

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The issue was that `useEffect` was missing its second parameter, which is the dependency array. 
// Without this array, the counter updates with every render, leading to an infinite loop:

// 1. Initial render → count = 0
// 2. `useEffect` executes `setCount(0 + 1)` → count = 1
// 3. `count` changes, triggering a new render
// 4. `useEffect` runs again → `setCount(1 + 1)` → count = 2
// 5. This process continues infinitely...

// The solution is to include an empty dependency array `[]` as the second parameter to `useEffect`. 
// This modification ensures that it runs only once when the component mounts, preventing the infinite loop.