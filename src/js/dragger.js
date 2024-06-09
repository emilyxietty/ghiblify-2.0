import { useState } from "react";

function Dragger(initialPosition, className) {
  const [position, setPosition] = useState(initialPosition);

  const dragHandler = (e, data) => {
    // Set position
    setPosition({ x: data.x, y: data.y });

    // Calculate screen width
    let screenWidth = window.innerWidth;
    console.log(screenWidth);
    // Calculate alignment based on x position
    let align = "";
    if (data.x < 0.33 * screenWidth) {
      align = "left";
    } else if (data.x > 0.66) {
      align = "right";
    } else {
      align = "right";
    }

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      element.style.textAlign = align;
    });

    // Log new position and alignment
    console.log("New position:", { x: data.x, y: data.y }, "Alignment:", align);
    console.log("Alignment:", align);
  };

  return [position, dragHandler];
}

export default Dragger;
