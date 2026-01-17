export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// EXPLANATION: In this Child component, I receive the onIncrement function as a prop from the Parent component.
// When the button is clicked, it calls the onIncrement function, which is defined in the Parent component.
// This allows the Child component to communicate with the Parent component and trigger an update to the counter state in the Parent when the button is clicked.
