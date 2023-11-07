import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Total } from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const excercises = [10, 7, 14];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} excercises={excercises} />
      <Total excercises={excercises}></Total>
    </div>
  );
};

export default App;
