import React from "react";
import { getTime } from "../Helpers/getTime";
import { useTimerContext } from "../Hooks/Context";
import Typography from "@material-ui/core/Typography";

const DisplayTime = ({ focus, shortbreak, longbreak }) => {
  const { timerState } = useTimerContext();
  return (
    <Typography variant="h1" id="display">
      {timerState === "focus"
        ? getTime(focus)
        : timerState === "shortbreak"
        ? getTime(shortbreak)
        : timerState === "longbreak"
        ? getTime(longbreak)
        : 0}
    </Typography>
  );
};

export default DisplayTime;
