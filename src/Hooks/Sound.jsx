import React, { useState, useContext } from "react";
import { sounds } from "../Helpers/sounds";

const soundContext = React.createContext();
const Sound = ({ children }) => {
  const [sound, setSound] = useState(sounds[0].audio);
  return (
    <soundContext.Provider value={{ sound, setSound }}>
      {children}
    </soundContext.Provider>
  );
};

export const useSoundContext = () => useContext(soundContext);

export default Sound;
