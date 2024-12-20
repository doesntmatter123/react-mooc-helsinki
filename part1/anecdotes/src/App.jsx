import { useState } from "react";
import Button from "./components/Button";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const App = () => {
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(-1);

  let highest = 0;
  const setNextAnecdote = () =>
    selected >= anecdotes.length - 1
      ? setSelected(0)
      : setSelected(selected + 1);

  const handleVoteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > highest) {
        highest = copy[i];
        setMostVoted(i);
      }
    }
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVoteClick} text={"vote"} />
      <Button handleClick={setNextAnecdote} text={"next anecdote"} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  );
};

export default App;
/*  */
