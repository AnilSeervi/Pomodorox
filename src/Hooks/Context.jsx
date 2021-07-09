import React, { useContext, useEffect, useRef, useState } from "react";

const logo = "Pomodorox";

const timerContext = React.createContext({});
const root = document.documentElement;
const Context = ({ children }) => {
  const streak = useRef(0);
  const [time, setTime] = useState({
    focus: 1500,
    shortbreak: 300,
    longbreak: 600,
  });
  const [displayTime, setDisplayTime] = useState({ ...time });
  const [timerState, setTimerState] = useState("focus");
  const [dark, setDark] = useState(() =>
    JSON.parse(localStorage.getItem("dark"))
  );
  const [longBreakInt, setLongBreakInt] = useState(4);
  const [autoBreak, setAutoBreak] = useState(false);
  const [autoStart, setAutoStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setDisplayTime({ ...time });
  }, [time]);
  return (
    <timerContext.Provider
      value={{
        root,
        time,
        setTime,
        displayTime,
        setDisplayTime,
        timerState,
        setTimerState,
        dark,
        setDark,
        longBreakInt,
        setLongBreakInt,
        isPlaying,
        setIsPlaying,
        autoBreak,
        setAutoBreak,
        autoStart,
        setAutoStart,
        counter,
        setCounter,
        streak,
        logo,
      }}
    >
      {children}
    </timerContext.Provider>
  );
};

export const useTimerContext = () => useContext(timerContext);

export default Context;
