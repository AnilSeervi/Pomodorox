import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import { makeStyles } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded";
import SettingsBackupRestoreRoundedIcon from "@material-ui/icons/SettingsBackupRestoreRounded";
import { useTimerContext } from "../Hooks/Context";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(2),
  },
}));

const FloatingBtn = () => {
  const history = useHistory();
  const {
    isPlaying,
    timerState,
    time,
    setDisplayTime,
    setTimerState,
    setCounter,
    streak,
  } = useTimerContext();
  const [hidden, setHidden] = useState(isPlaying);
  useEffect(() => {
    setHidden(isPlaying);
    if (isPlaying) {
      handleClose();
    }
  }, [isPlaying]);

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSettingsClick = useCallback(() => {
    handleClose();
    history.push("/settings");
  });
  const handleReset = () => {
    setDisplayTime({ ...time });
    setTimerState("focus");
    setCounter(0);
    handleClose();
  };
  return (
    <SpeedDial
      ariaLabel="More Options"
      className={classes.speedDial}
      hidden={hidden}
      icon={
        <SpeedDialIcon
          icon={<ExpandMoreRoundedIcon />}
          openIcon={<ExpandLessRoundedIcon />}
        />
      }
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      <SpeedDialAction
        tooltipTitle="Reset"
        // tooltipOpen
        onClick={handleReset}
        icon={<SettingsBackupRestoreRoundedIcon />}
      />
      <SpeedDialAction
        tooltipTitle="Settings"
        // tooltipOpen
        onClick={handleSettingsClick}
        icon={<SettingsRoundedIcon />}
      />
      <SpeedDialAction
        tooltipTitle={timerState}
        tooltipOpen
        onClick={handleClose}
        icon={
          <Badge color="secondary" badgeContent={streak.current} showZero>
            <WhatshotRoundedIcon />
          </Badge>
        }
      />
    </SpeedDial>
  );
};

export default FloatingBtn;
