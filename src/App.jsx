// Import React hooks
// useState → allows component to store changing data (state)
// useEffect → allows side effects like timers, API calls, subscriptions
import { useState, useEffect } from "react";

function App() {

  /*
    STATE SECTION
    -------------
    time → current state value
    setTime → function used to update the state
    new Date() → initial value when component first loads

    Why state?
    Because when state changes,
    React automatically re-renders the component.
  */
  const [time, setTime] = useState(new Date());

  /*
    EFFECT SECTION
    --------------
    useEffect runs after the component is mounted (first rendered).

    The empty dependency array [] means:
    "Run this effect only once when component loads."
  */
  useEffect(() => {

    /*
      setInterval duty:
      Every 1000 milliseconds (1 second),
      update the state with new Date().

      When setTime() runs,
      React detects state change,
      React re-renders the component automatically.
    */
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    /*
      Cleanup function:
      When component unmounts,
      clear the interval to prevent memory leaks.

      This is very important in real applications.
    */
    return () => clearInterval(interval);

  }, []); // Empty dependency array

  /*
    JSX SECTION
    ------------
    React returns UI based on current state.
    time.toLocaleTimeString() converts Date into readable time.
  */
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>The time now is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
