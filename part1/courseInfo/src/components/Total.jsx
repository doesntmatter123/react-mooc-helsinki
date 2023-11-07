export const Total = ({ excercises }) => {
  let total = 0;
  excercises.map((item) => {
    total += item;
  });
  return <p>Number of excercises {total}</p>;
};
