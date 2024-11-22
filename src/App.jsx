import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // useState for simple counter
  const [count, setCount] = useState(0);

  // useRef for referencing input element
  const inputRef = useRef();

  // useEffect to log when the component mounts and when count changes
  useEffect(() => {
    console.log('Component mounted or count changed:', count);

    // Optional cleanup function
    return () => {
      console.log('Cleanup before next effect or unmount');
    };
  }, [count]); // Run the effect only when `count` changes

  // Increment count
  const increment = () => setCount(count + 1);

  // Decrement count
  const decrement = () => setCount(count - 1);

  // Focus on input field when button is clicked
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>React Hooks Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={focusInput}>Focus on Input</button>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <p>this is that change</p>
      <p>local development main flow</p>
    </div>
  );
}

export default App;
