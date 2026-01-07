// src/exercises/week-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this week's components.
*/

import { useState } from "react";

export default function BugProps({ name = "friend" }) {
  const [message, setMessage] = useState("Hello, " + name);

  function handleChange() {
    setMessage("Hi, " + name + "!");
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// The issue was that the message was being created and stored in a manner that React couldn't detect changes. 
// By utilizing the `useState` hook to manage the message state, we ensure that when `setMessage` is called, 
// React is aware it needs to re-render the component with the updated message. 
// This enables the user interface to reflect the changes when the button is clicked.