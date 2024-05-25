import React, { useState } from "react";
import Draggable from "react-draggable";
import "../css/Widget.css";
import chi from "../img/avatars/chi.gif";

// import './Widget.css';

const avatars = [
  { src: chi, alt: "Chi Avatar" },
  // Add more avatars as needed
];

const AvatarWidget = ({ index }) => {
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });

  const dragHandler = (e, data) => {
    setAvatarPosition({ x: data.x, y: data.y });
    console.log("New position:", { x: data.x, y: data.y });
  };

  const selectedAvatar = avatars[index];

  return (
    <Draggable bounds="parent" onStop={dragHandler}>
      <div className="widget_container">
        <img
          src={selectedAvatar.src}
          alt={selectedAvatar.alt}
          className="Avatar"
        />
      </div>
    </Draggable>
  );
};

export default AvatarWidget;
