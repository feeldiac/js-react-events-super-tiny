import { useEffect } from "react";

export const useButton = () => {
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isOff = target.innerText === "Machine is off";

      if (isOff) {
        target.innerText = "Machine is on";
        target.className = "on";
      }

      if (!isOff) {
        target.innerText = "Machine is off";
        target.className = "off";
      }
    };

    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("click", click);
    };
  }, []);
};
