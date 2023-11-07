export const Total = ({ course }) => {
  const parts = [...course.parts];

  return (
    <p>
      Number of excercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};
