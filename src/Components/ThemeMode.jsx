import React from "react";
import Typography from "@material-ui/core/Typography";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useTimerContext } from "../Hooks/Context";

const ThemeMode = () => {
  const { dark, setDark } = useTimerContext();
  const handleThemeModeChange = (e, newValue) => {
    if (newValue !== null) {
      setDark(!!parseInt(newValue));
      localStorage.setItem("dark", !!parseInt(newValue));
    }
  };
  return (
    <div className="themeMode">
      <Typography variant="subtitle1"> Theme Mode</Typography>
      <ToggleButtonGroup
        size="small"
        value={dark ? "1" : "0"}
        exclusive
        onChange={handleThemeModeChange}
      >
        <ToggleButton value="0">
          <Brightness7Icon />
        </ToggleButton>
        <ToggleButton value="1">
          <Brightness4Icon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ThemeMode;
