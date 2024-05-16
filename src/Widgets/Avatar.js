import React from 'react';
import '../css/Widget.css';
import chi from '../img/avatars/chi.gif';

const avatars = [
  { src: chi, alt: "Chi Avatar" },
  // Add more avatars as needed
];

const AvatarWidget = ({ index }) => {
    const selectedAvatar = avatars[index];
    
    return (
      <div>
        <img src={selectedAvatar.src} alt={selectedAvatar.alt} className = "Avatar"/>
      </div>
    );
  };

export default AvatarWidget;
