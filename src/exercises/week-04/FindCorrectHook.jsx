import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0);
  function handleClick() {
    clickCount.current++;
    console.log('Clicks:', clickCount.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount.current} Clicks</button>
    </div>
  );
}

// TOPIC: useRef vs useState
// TASK: Identify whether to use useRef or useState to track the number of button clicks without causing re-renders.
// EXPLANATION: In this case, useRef is the correct choice because we want to track the number of button clicks without causing re-renders.
// Using useState would trigger a re-render on each click, which is unnecessary for this use case.
// useRef allows us to maintain a mutable value that persists across renders without causing additional renders when it changes.
// I use Console.log to show the updated click count in the console each time the button is clicked.
// NOTE: To see the click count updates, open the browser's developer console.
