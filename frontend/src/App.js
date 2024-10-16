import { useTheme } from "@mui/material/styles";
import { useAtom } from "jotai";
import React from "react";
// import "./css/App.css";
// import "./css/Widget.css";
// import Background from "./js/Background.js";
import BackgroundImage from "./atoms/BackgroundImage";
import SettingsModal from "./js/Settings.js";
// import AvatarWidget from "./js/Widgets/Avatar.js";
// import DateWidget from "./js/Widgets/Date.js";
// import InfoWidget from "./js/Widgets/Info.js";
// import PomodoroWidget from "./js/Widgets/Pomodoro.js";
import {
  avatarAtom,
  dateAtom,
  infoAtom,
  pomodoroAtom,
  timeAtom,
} from "./state/atoms";

// import TimeWidget from "./js/Widgets/Time.js";

// TEST MATERIALS
import "./style/app.css";
import Test from "./Tests";

function App() {
  const theme = useTheme();
  const [avatar] = useAtom(avatarAtom);
  const [date] = useAtom(dateAtom);
  const [info] = useAtom(infoAtom);
  const [pomodoro] = useAtom(pomodoroAtom);
  const [time] = useAtom(timeAtom);

  return (
    <div className="App">
      {/* <Background /> */}
      <BackgroundImage />
      <div className="Header">
        <SettingsModal />
        <div></div>
      </div>
      <div className="Widgets light">
        <Test />
        {/* {date.toggle && <DateWidget />}
        {time.toggle && <TimeWidget />}
        {avatar.toggle && <AvatarWidget index={0} />}
        {info.toggle && <InfoWidget MOVIE_ID={13} />}
        {pomodoro.toggle && <PomodoroWidget />} */}
      </div>
    </div>
  );
}

export default App;
