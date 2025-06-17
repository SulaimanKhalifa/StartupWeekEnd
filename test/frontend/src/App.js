import './App.css';
import { useState } from 'react';
import {Grid} from '@mantine/core'
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

function Slides(){
  return(
  <iframe width={1000} height={1000}
    src="https://www.canva.com/design/DAGaNC7ccA8/La7KRTx6F5HzwQPcvE1c7A/view?embed" >
  </iframe>

)}

function Dashboard() {
  return (
    <Grid rows={1}>
      <Grid.Col w = {10}  span={4}>1</Grid.Col>
      <Grid.Col w = {10} span={4}>2</Grid.Col>
      <Grid.Col w = {10} span={4}>3</Grid.Col>
    </Grid>
  );}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard/>
      </header>
    </div>
  );
}

export default App;
