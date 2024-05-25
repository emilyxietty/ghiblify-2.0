import React, { useState } from "react";
import "./css/App.css";
import "./css/Widget.css";
import DateWidget from "./Widgets/Date.js";
import { useTheme } from "@mui/material/styles";
import Background from "./Bg.js";
import SettingsModal from "./Widgets/Settings.js";
import AvatarWidget from "./Widgets/Avatar.js";
import InfoWidget from "./Widgets/Info.js";
import Draggable from "react-draggable";

import TimeWidget from "./Widgets/Time.js";

function App() {
  const theme = useTheme();
  const [timePosition, setTimePosition] = useState({ x: 0, y: 0 });

  const dragHandler = (e, data) => {
    setTimePosition({ x: data.x, y: data.y });
    console.log("New position:", { x: data.x, y: data.y });
  };

  return (
    <div className="App">
      <Background />
      <div className="Header">
        <SettingsModal />
        <div></div>
      </div>
      <div className="Widgets light">
        <Draggable bounds="parent" onStop={dragHandler}>
          <div>
            <TimeWidget />
          </div>
        </Draggable>
        <p>
          Time Widget Position: x: {timePosition.x}, y: {timePosition.y}
        </p>
        <DateWidget />
        <AvatarWidget index={0} />
        <InfoWidget MOVIE_ID={13} />
      </div>
    </div>
  );
}

export default App;
