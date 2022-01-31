import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import Display from "./Display/Display";

function App() {
  const [number, setNumber] = useState(10);

  const increment = () => {
    if (number === 10) {
      return;
    }
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number === 0) {
      return;
    }
    setNumber(number - 1);
  };

  return (
    <div className="container">
      <Button text="+" actionOnClick={increment} />
      <Display number={number} />
      <Button text="-" actionOnClick={decrement} />
    </div>
  );
}

export default App;
