import { useButtons } from "./hooks";
import styles from "./styles/04.module.css";

const View04 = () => {
  useButtons();

  return (
    <>
      <section className="preview"></section>

      {/* <div className={`${styles["button-bar"]} button-bar`}> */}
      <div className={`${styles.buttonBar} button-bar`}>
        <button data-color="red">Red</button>
        <button data-color="yellow">Yellow</button>
        <button data-color="green">Green</button>
        <button data-color="purple">Purple</button>
      </div>
    </>
  );
};

export default View04;
