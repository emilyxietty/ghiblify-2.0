import { atom } from "jotai";

export const settingsAtom = atom({
  avatar: true,
  date: true,
  info: true,
  pomodoro: true,
  time: true,
});
