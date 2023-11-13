import StatisticsLine from "./StatisticsLine";

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const positive = good / all;

  return all <= 0 ? (
    <p>No feedback given</p>
  ) : (
    <>
      <StatisticsLine text={"good"} value={good} />
      <StatisticsLine text={"neutral"} value={neutral} />
      <StatisticsLine text={"bad"} value={bad} />
      <StatisticsLine text={"all"} value={all} />
      <StatisticsLine text={"average"} value={avg} />
      <StatisticsLine text={"positive"} value={positive} />
    </>
  );
}

export default Statistics;
