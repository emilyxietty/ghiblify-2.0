import React from "react";
import Draggable from "react-draggable";
import "../../css/Widget.css";
import chi from "../../assets/avatars/chi.gif";
import { avatarAtom } from "../../state/atoms.js";
import { useAtom } from "jotai";

const avatars = [
  { src: chi, alt: "Chi Avatar" },
  // Add more avatars as needed
];

const AvatarWidget = ({ index }) => {
  const [avatar, setAvatar] = useAtom(avatarAtom);
  console.log(avatar);

  const dragHandler = (e, data) => {
    if (avatar.toggle) {
      setAvatar({ ...avatar, xPos: data.x, yPos: data.y });
    }
  };
  const selectedAvatar = avatars[index];

  return (
    <Draggable
      bounds="parent"
      onStop={dragHandler}
      position={{
        x: avatar.xPos,
        y: avatar.yPos,
      }}
    >
      <div className="widget_container" id="avatar">
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
