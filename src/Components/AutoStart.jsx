import React from "react";
import Typography from "@material-ui/core/Typography";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { useTimerContext } from "../Hooks/Context";

const AutoStart = () => {
  const { autoStart, setAutoBreak, autoBreak, setAutoStart } =
    useTimerContext();
  const handleBreakChange = (e, newValue) => {
    if (newValue !== null) {
      setAutoBreak(!!parseInt(newValue));
    }
  };
  const handleStartChange = (e, newValue) => {
    if (newValue !== null) {
      setAutoStart(!!parseInt(newValue));
    }
  };
  return (
    <>
      <div className="autoBreak">
        <Typography variant="subtitle1">Auto Start Breaks</Typography>
        <ToggleButtonGroup
          size="small"
          value={autoBreak ? "1" : "0"}
          exclusive
          onChange={handleBreakChange}
        >
          <ToggleButton value="0">
            <ClearRoundedIcon />
          </ToggleButton>
          <ToggleButton value="1">
            <DoneRoundedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="autoStart">
        <Typography variant="subtitle1">Auto Start Pomodoros</Typography>
        <ToggleButtonGroup
          size="small"
          value={autoStart ? "1" : "0"}
          exclusive
          onChange={handleStartChange}
        >
          <ToggleButton value="0">
            <ClearRoundedIcon />
          </ToggleButton>
          <ToggleButton value="1">
            <DoneRoundedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default AutoStart;
