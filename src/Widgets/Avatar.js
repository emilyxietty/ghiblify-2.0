import React from "react";
import Draggable from "react-draggable";
import "../css/Widget.css";
import chi from "../img/avatars/chi.gif";
import Dragger from "./dragger.js";

const avatars = [
  { src: chi, alt: "Chi Avatar" },
  // Add more avatars as needed
];

const AvatarWidget = ({ index }) => {
  const [avatarPosition, dragHandler] = Dragger({ x: 0, y: 0 }, "Avatar");

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
