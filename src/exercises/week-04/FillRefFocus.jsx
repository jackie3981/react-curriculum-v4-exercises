// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);
  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={inputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// EXPLANATION: In this exercise, I use the useRef hook to create a reference to the input element.
// The ref is then attached to the input element via the ref attribute.
// When the button is clicked, the focusInput function is called, which accesses the current property of the ref to call the focus() method on the input element.
// This causes the input field to receive focus when the button is clicked, demonstrating how useRef can be used to directly interact with DOM elements.
