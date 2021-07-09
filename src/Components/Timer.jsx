import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { getTime } from "../Helpers/getTime";
import useInterval from "../Helpers/useInterval";
import { useTimerContext } from "../Hooks/Context";
import DisplayTime from "./DisplayTime";

const Timer = () => {
  const {
    root,
    time,
    timerState,
    counter,
    setCounter,
    displayTime,
    setDisplayTime,
    setTimerState,
    isPlaying,
    setIsPlaying,
    longBreakInt,
    autoStart,
    autoBreak,
    streak,
    logo,
  } = useTimerContext();
  // const [interval, setInterval] = useState(0);
  // useEffect(() => {
  //   setDisplayTime({ ...time });
  // }, [time]);
  useEffect(() => {
    counter === longBreakInt &&
      longBreakInt !== 0 &&
      setTimerState("longbreak");
  }, [counter]);

  useLayoutEffect(() => {
    root.style.setProperty(
      "--from",
      `${
        timerState === "focus"
          ? (100 - (displayTime.focus * 100) / time.focus).toFixed(4)
          : timerState === "shortbreak"
          ? ((displayTime.shortbreak * 100) / time.shortbreak).toFixed(4)
          : timerState === "longbreak"
          ? ((displayTime.longbreak * 100) / time.longbreak).toFixed(4)
          : 0
      }%`
    );
    document.title =
      `${
        timerState === "focus"
          ? getTime(displayTime.focus)
          : timerState === "shortbreak"
          ? getTime(displayTime.shortbreak)
          : timerState === "longbreak"
          ? getTime(displayTime.longbreak)
          : logo
      }` + ` - ${timerState[0].toUpperCase() + timerState.substr(1)}`;
  }, [displayTime]);

  const updateTime = useCallback(() => {
    setDisplayTime({ ...time });
  }, []);
  useCallback(() => {
    // root.style.setProperty(
    //   "--name",
    //   `${timerState === "focus" ? "down" : "up"}`
    // );
    // if (timerState === "focus") {
    //   root.style.setProperty("--duration", `${time.focus}s`);
    // } else if (timerState === "shortbreak") {
    //   root.style.setProperty("--duration", `${time.shortbreak}s`);
    // } else if (timerState === "longbreak") {
    //   root.style.setProperty("--duration", `${time.longbreak}s`);
    // }
  }, [timerState]);

  // useEffect(() => {
  //   root.style.setProperty(
  //     "--name",
  //     `${timerState === "focus" ? "down" : "up"}`
  //   );
  //   root.style.setProperty(
  //     "--play-state",
  //     `${isPlaying ? "running" : "paused"}`
  //   );
  // }, [isPlaying]);

  const runTimer = useCallback(() => {
    if (timerState === "focus") {
      setDisplayTime((c) => ({ ...c, focus: c.focus - 1 }));
      if (displayTime.focus === 0) {
        if (!autoBreak) setIsPlaying(false);
        setTimerState("shortbreak");
        updateTime();
        setCounter((c) => c + 1);
        streak.current += 1;
      }
    }
    if (timerState === "shortbreak") {
      setDisplayTime((c) => ({ ...c, shortbreak: c.shortbreak - 1 }));
      if (displayTime.shortbreak === 0) {
        if (!autoStart) setIsPlaying(false);
        setTimerState("focus");
        updateTime();
      }
    }
    if (timerState === "longbreak") {
      setDisplayTime((c) => ({ ...c, longbreak: c.longbreak - 1 }));
      if (displayTime.longbreak === 0) {
        if (!autoStart) setIsPlaying(false);
        setCounter(0);
        setTimerState("focus");
        updateTime();
      }
    }
  }, [displayTime]);
  useInterval(
    () => {
      runTimer();
    },
    isPlaying ? 1000 : null
  );
  // const handleReset = () => {
  //   root.style.setProperty("--name", "default");
  //   setDisplayTime(() => ({ ...time }));
  //   setInterval(0);
  //   setTimerState("focus");
  // };
  return (
    <>
      <DisplayTime {...displayTime} />
      {/* <p>{timerState}</p>
      <p>{[interval, longBreakInt].join` `}</p>
    {!isPlaying && <button onClick={handleReset}>reset</button>} */}
    </>
  );
};

export default Timer;
