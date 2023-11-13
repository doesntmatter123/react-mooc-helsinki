import { useState } from "react";
import Button from "../components/Button";
import { Header } from "../components/Header";
import Statistics from "../components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToValue = (val, set) => () => set(val + 1);

  return (
    <div>
      <Header text={"give feedback"} />
      <Button name={"good"} handleClick={setToValue(good, setGood)} />
      <Button name={"neutral"} handleClick={setToValue(neutral, setNeutral)} />
      <Button name={"bad"} handleClick={setToValue(bad, setBad)} />
      <Header text={"statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral} />{" "}
    </div>
  );
}

export default App;
