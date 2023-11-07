import { Part } from "./Part";

export const Content = ({ parts, excercises }) => {
  const [part1, part2, part3] = parts;
  const [e1, e2, e3] = excercises;
  return (
    <div>
      <Part part={part1} exc={e1} />
      <Part part={part2} exc={e2} />
      <Part part={part3} exc={e3} />
    </div>
  );
};
