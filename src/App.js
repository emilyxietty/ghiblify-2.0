import { useTheme } from "@mui/material/styles";
import React from "react";
import Background from "./js/Bg.js";
import "./css/App.css";
import "./css/Widget.css";
import AvatarWidget from "./js/Widgets/Avatar.js";
import DateWidget from "./js/Widgets/Date.js";
import InfoWidget from "./js/Widgets/Info.js";
import SettingsModal from "./js/Settings.js";
import { settingsAtom } from "./state/atoms";
import { useAtom } from "jotai";

import TimeWidget from "./js/Widgets/Time.js";

function App() {
  const theme = useTheme();
  const [settings] = useAtom(settingsAtom);

  return (
    <div className="App">
      <Background />
      <div className="Header">
        <SettingsModal />
        <div></div>
      </div>
      <div className="Widgets light">
        {settings.time && <TimeWidget />}
        {settings.date && <DateWidget />}
        {settings.avatar && <AvatarWidget index={0} />}
        {settings.info && <InfoWidget MOVIE_ID={13} />}
      </div>
    </div>
  );
}

export default App;
