import React, { useEffect } from "react";
import { styled } from "@mui/system";
import utils from "../configJS/utils";

const Canvas = () => {
  useEffect(() => {
    renderCanvas();
  });

  // Custom styles for creating the canvas element
//   const MyComponent = styled("canvas")({
//     backgroundColor: "rgb(80,40,20)",
//   });

  const renderCanvas = () => {
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

    // Event Listeners
    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    // // Objects
    class Object {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      }

      update() {
        this.draw();
      }
    }

    // // Implementation
    let objects;
    function init() {
      objects = [];

      for (let i = 0; i < 400; i++) {
        objects.push()
      }
    }

    // // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
      objects.forEach(object => {
       object.update()
      })
    }

    init();
    animate();
  };

  return (
    <>
      <canvas id="intro-canvas"></canvas>
    </>
  );
};

export default Canvas;
