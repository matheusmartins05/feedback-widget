import { atom } from "recoil";

export const menuFeedback = atom({
    key: 'menuFeedback', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });