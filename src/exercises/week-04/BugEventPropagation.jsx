// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(e) {
    e.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// EXPLANATION: In this example, clicking the inner button triggers its own click handler as well as the outer div's click handler due to event bubbling.
// To prevent this, I use e.stopPropagation() in the inner button's click handler.
// This stops the event from bubbling up to the outer div, ensuring that only the button's alert is shown when it is clicked.
