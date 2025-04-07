import { useEffect } from "react";

export const useButtons = () => {
  useEffect(() => {
    const bar = document.querySelector(".button-bar") as HTMLElement;

    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName.toLowerCase() === "button") {
        const color = target.dataset["color"];

        bar.style.backgroundColor = color || "white";
      }
    };

    bar.addEventListener("click", click);

    return () => {
      bar.removeEventListener("click", click);
    };
  }, []);
};
