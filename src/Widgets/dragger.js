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

// import { useState } from "react";

// function Dragger(initialPosition) {
//   // Get the root font size in pixels
//   const rootFontSize = parseFloat(
//     getComputedStyle(document.documentElement).fontSize
//   );

//   // Convert initialPosition from pixels to rem
//   const initialPositionRem = {
//     x: initialPosition.x / rootFontSize,
//     y: initialPosition.y / rootFontSize,
//   };

//   const [position, setPosition] = useState(initialPositionRem);

//   const dragHandler = (e, data) => {
//     // Convert data.x and data.y from pixels to rem
//     const xRem = data.x / rootFontSize;
//     const yRem = data.y / rootFontSize;
//     setPosition({ x: xRem, y: yRem });
//     console.log("New position:", { x: xRem, y: yRem });
//   };

//   return [position, dragHandler];
// }

// export default Dragger;
