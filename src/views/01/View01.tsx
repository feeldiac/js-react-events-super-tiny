import { useHandleClick } from "./hooks";
import classes from "./styles/example.module.css";

// Muestra algunas propiedades del objeto event (MouseEvent) y resalta el target con un borde azul.

const View01 = () => {
  const data = useHandleClick();

  return (
    <>
      <h1 className={classes.red}>View 01</h1>
      <code>{data}</code>
    </>
  );
};

export default View01;
