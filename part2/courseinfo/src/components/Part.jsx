/* eslint-disable react/prop-types */
const Part = ({ item }) => {
  return <p>{item.name + " " + item.exercises}</p>;
};

export default Part;
