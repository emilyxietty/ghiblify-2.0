import { atom } from "jotai";

export const avatarAtomDefault = {
  toggle: true,
  xPos: 10,
  yPos: 0,
};

export const dateAtomDefault = {
  toggle: true,
  xPos: 400,
  yPos: 0,
};

export const infoAtomDefault = {
  toggle: true,
  xPos: 400,
  yPos: 500,
};

export const pomodoroAtomDefault = {
  toggle: true,
  xPos: 1000,
  yPos: 200,
};

export const timeAtomDefault = {
  toggle: true,
  xPos: 400,
  yPos: 300,
};

export const avatarAtom = atom(avatarAtomDefault);
export const infoAtom = atom(infoAtomDefault);
export const pomodoroAtom = atom(pomodoroAtomDefault);
export const timeAtom = atom(timeAtomDefault);
export const dateAtom = atom(dateAtomDefault);
