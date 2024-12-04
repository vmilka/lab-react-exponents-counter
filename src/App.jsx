import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import { useState } from "react";


function App () {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () =>setCount(count + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent num={count} exponent={2}/>
        <Exponent num={count} exponent={3}/>
        <Exponent num={count} exponent={4}/>
        <Exponent num={count} exponent={5}/>
        <Exponent num={count} exponent={6}/>
      </div>
    </div>
  );
}

export default App;