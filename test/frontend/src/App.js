import './App.css';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>I'm a button number = {count}</button>;
}

function Clock({ defaultSec = 0 }) {
  const [sec, setSec] = useState(defaultSec);

  const handleChange = (e) => {
    const inputVal = e.target.value;
    const parsed = parseInt(inputVal, 10) || 0;

    setSec(parsed);

    const lab = document.getElementById('lab');
    lab.innerText = `${Math.floor(parsed / 60)
      .toString()
      .padStart(2, '0')}:${Math.floor(parsed % 60)
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <form>
      <label id="lab">00:00</label>
      <input
        id="input"
        type="number"
        value={sec}
        onChange={handleChange}
      />
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyButton/> */}
        <Clock />
      </header>
    </div>
  );
}

export default App;
