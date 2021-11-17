import { useState } from "react";
import Header from "../Header";
import Button from "../Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = (value) => {
    setCounter(counter + value);
  };
  const handleDouble = (value) => {
    setCounter(counter * value);
  };
  return (
    <div className="App">
      <Header title={"Counter"} />
      <Header title={counter} />
      <Button title="ADD" onClick={() => handleClick(1)} />
      <Button title="Reduce" onClick={() => handleClick(-1)} />
      <Button title="Double Click" onClick={() => handleDouble(2)} />
    </div>
  );
}
