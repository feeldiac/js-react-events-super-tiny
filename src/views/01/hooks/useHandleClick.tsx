import { useEffect, useState } from "react";

const keys = [
  //   unable to stringify objects with circular references. like nodes
  //   "target",
  //   "currentTarget",

  //   Event properties
  "bubbles",
  "cancelable",
  "composed",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "timeStamp",
  "type",
  //   MouseEvent properties
  "altKey",
  "button",
  "buttons",
  //   "clientX",
  "x",
  //   "clientY",
  "y",
  "ctrlKey",
  "metaKey",
  "movementX",
  "movementY",
  "offsetX",
  "offsetY",
  "pageX",
  "pageY",
  "screenX",
  "screenY",
  "shiftKey",
];

export const useHandleClick = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const click = (e: MouseEvent) => {
      let tagName = "";
      if (e.target && e.target instanceof HTMLElement) {
        tagName = e.target.tagName;

        e.target.style.border = "1px solid blue";
      }

      const data = JSON.stringify(
        {
          ...Object.fromEntries(
            keys.map((key) => {
              return [[key], (e as MouseEvent)[key as keyof MouseEvent]];
            })
          ),
          tagName,
        },
        null,
        2
      );

      setData(data);
    };

    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("click", click);
    };
  }, []);

  return data;
};
