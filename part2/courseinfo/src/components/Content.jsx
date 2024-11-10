/* eslint-disable react/prop-types */
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} item={part} />
      ))}
    </div>
  );
};

export default Content;
