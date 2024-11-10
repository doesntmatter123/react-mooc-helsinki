/* eslint-disable react/prop-types */
import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce((sum, current) => sum + current.exercises, 0);

  return (
    <div>
      <Header heading={course.name} />
      <Content parts={parts} />
      <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>
    </div>
  );
};

export default Course;
