import { useButton } from "./hooks";

const View02 = () => {
  useButton();

  return (
    <>
      <h1>View02</h1>
      <button className="off">Machine is off</button>
    </>
  );
};

export default View02;
