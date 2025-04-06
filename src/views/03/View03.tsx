import { useCanvas } from "./hooks";
import clases from "./styles/03.module.css";

const View03 = () => {
  useCanvas();

  return (
    <>
      <section className={clases.section}>
        <canvas
          tabIndex={0}
          width="500px"
          height="500px"
          className={clases.canvas}
        ></canvas>
      </section>
    </>
  );
};

export default View03;
