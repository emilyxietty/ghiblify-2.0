import React from "react";

const Settings = ({
  //   visible,
  //   toggleSettingsVisibility,
  pomoLength,
  setPomoLength,
  shortLength,
  setShortLength,
  longLength,
  setLongLength,
  closeSettings,
  setSecondsLeft,
  timerMode,
}) => {
  const styles = document.documentElement.style;

  const applySettings = (event) => {
    event.preventDefault();
    setPomoLength(event.target.pomodoro.value);
    setShortLength(event.target.shortBreak.value);
    setLongLength(event.target.longBreak.value);
    closeSettings();

    switch (timerMode) {
      case "short":
        setSecondsLeft(event.target.shortBreak.value * 60);
        break;
      case "long":
        setSecondsLeft(event.target.longBreak.value * 60);
        break;
      default:
        setSecondsLeft(event.target.pomodoro.value * 60);
    }
  };
  return (
    <div>
      <h2>Pomodoro Settings</h2>
      <form onSubmit={applySettings}>
        {/* <div className="pane__time-settings"> */}
        <h3>Time (Minutes)</h3>
        <div action="" className="time-settings__form">
          <label htmlFor="pomodoro">pomodoro</label>
          <input
            type="number"
            name="pomodoro"
            id="pomodoro"
            min="5"
            max="90"
            defaultValue={pomoLength}
          />
          <label htmlFor="short-break">short break</label>
          <input
            type="number"
            name="shortBreak"
            id="short-break"
            min="1"
            max="14"
            defaultValue={shortLength}
          />
          <label htmlFor="long-break">long break</label>
          <input
            type="number"
            name="longBreak"
            id="long-break"
            min="15"
            max="30"
            defaultValue={longLength}
          />
          {/* </div> */}
        </div>
        <div className="pane__apply-row">
          <input
            type="submit"
            value={"Apply"}
            className="pane__apply-preferences"
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
