import React, { useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import { useTimerContext } from "../Hooks/Context";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.2vw",
    position: "fixed",
    bottom: "2%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  playButton: {
    fontSize: "clamp(2.1875rem,15vw,4rem)",
  },
  btnSize: {
    fontSize: "clamp(1.25rem,6vw,1.7rem)",
  },
});

const Controls = () => {
  const classes = useStyles();
  const {
    isPlaying,
    setIsPlaying,
    counter,
    longBreakInt,
    timerState,
    setTimerState,
    setCounter,
    time,
    setDisplayTime,
  } = useTimerContext();
  const handleTimerStateChange = useCallback(() => {
    if (timerState == "focus") {
      if (counter === longBreakInt) setTimerState("longbreak");
      else setTimerState("shortbreak");
    } else if (timerState === "shortbreak") {
      setCounter((c) => c + 1);
      setTimerState("focus");
    } else if (timerState === "longbreak") {
      setTimerState("focus");
      setCounter(1);
    }
  }, [timerState]);
  const handleReset = useCallback(() => {
    setDisplayTime({ ...time });
    setIsPlaying(false);
  }, [time]);
  const handlePlayPause = useCallback(() => {
    setIsPlaying((c) => !c);
  }, []);
  return (
    <div className={classes.container}>
      <div>
        <IconButton onClick={handleReset}>
          <ReplayRoundedIcon classes={{ root: classes.btnSize }} />
        </IconButton>
      </div>
      <div>
        <IconButton onClick={handlePlayPause}>
          {isPlaying ? (
            <PauseIcon classes={{ root: classes.playButton }} />
          ) : (
            <PlayArrowRoundedIcon classes={{ root: classes.playButton }} />
          )}
        </IconButton>
      </div>
      <div>
        <IconButton onClick={handleTimerStateChange}>
          <SkipNextRoundedIcon classes={{ root: classes.btnSize }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Controls;
