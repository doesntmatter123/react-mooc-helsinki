import { Part } from "./Part";

export const Content = ({ course: { parts } }) => {
  return (
    <div>
      <Part part={parts[0].name} exc={parts[0].exercises} />
      <Part part={parts[1].name} exc={parts[1].exercises} />
      <Part part={parts[2].name} exc={parts[2].exercises} />
    </div>
  );
};
