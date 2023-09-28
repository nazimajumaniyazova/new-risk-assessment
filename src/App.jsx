import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Test from './components/Test/Test';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ThemeToggle></ThemeToggle>
      <Test />
    </div>
  );
}

export default App;
