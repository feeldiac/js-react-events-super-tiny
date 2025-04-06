import { useEffect } from "react";

type Canvas = HTMLCanvasElement | null;
type Context = CanvasRenderingContext2D | null | undefined;
type DrawFigure = (x: number, y: number) => void;

const SIZE = 50;
const STEP = 12.5;

export const useCanvas = () => {
  useEffect(() => {
    const canvas: Canvas = document.querySelector("canvas");
    const context: Context = canvas?.getContext("2d");

    let x = 250;
    let y = 250;

    const updatePosition = (key: string) => {
      if (!key) return;

      if (key === "w") {
        y -= STEP;
      }

      if (key === "s") {
        y += STEP;
      }

      if (key === "a") {
        x -= STEP;
      }

      if (key === "d") {
        x += STEP;
      }
    };

    const drawFigure: DrawFigure = (x, y) => {
      if (!context || !canvas) return;

      // Clear the canvas
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the figure
      context.beginPath();
      context.fillStyle = "black";
      context.arc(x, y, SIZE, 0, 2 * Math.PI);
      context.fill();
    };

    const keydown = (e: KeyboardEvent) => {
      updatePosition(e.key);
      drawFigure(x, y);
    };

    // Initial draw
    drawFigure(x, y);

    window.addEventListener("keydown", keydown);

    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);
};
